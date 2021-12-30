const router = require('express').Router();

const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', async(req, res) => {
    try {
        await stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
            description: "SempaiCart App"
        }, (error, response) => {
            if (error) {
                console.log(error);
                res.status(500).json(error);
            } else {
                res.status(200).json(response);
            }
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;