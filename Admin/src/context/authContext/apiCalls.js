import axios from "axios" ;
import { loginStart, loginFailure, loginSuccess } from "../authContext/AuthAction" ;

export const login = async(user,dispatch)=>{
    dispatch(loginStart()) ;
    try{
        const res = axios.post("auth/login",user);
        dispatch(loginSuccess(res.data)) ;

    }catch(e){
        dispatch(loginFailure()) ;
    }
}