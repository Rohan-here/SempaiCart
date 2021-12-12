const router = require('express').Router();

const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', (req, res) => {
    stripe.charge.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "inr"
    }, (error, response) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.status(200).json(response);
        }
    })
})

module.exports = router;