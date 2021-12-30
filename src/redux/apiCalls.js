import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requests";


export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (e) {
        dispatch(loginFailure());
    }
}