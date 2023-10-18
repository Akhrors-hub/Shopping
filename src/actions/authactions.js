import axios from "../utils/axios"
import { USER_LOADED,
 USER_LOADING,
 AUTH_ERROR,
 LOGIN_SUCCESS,
 LOGIN_FAIL,
 LOGOUT_SUCCESS,
 REGISTER_SUCCESS,
REGISTER_FAIL } from "./type.js"


export const loadUser = (userData)=>{
    return {
        type: USER_LOADED, payload: userData
    }
}

export const register =({email,password})=>dispatch=>{


axios.post("/api/auth/register",{email, password})
.then(res=>(dispatch({
    type: REGISTER_SUCCESS,
    payload: {user: res.data.user, token: res.headers["auth-token"]}
}))).catch(err=>(dispatch({
    type: REGISTER_FAIL,
       })))
}



export const login =({email,password})=>dispatch=>{
    
   
    axios.post("/api/auth/login",{email, password})
    .then(res=>{
        console.log(res)
        return (dispatch({
        type: LOGIN_SUCCESS,
        payload: {user: res.data.user, token: res.headers["auth-token"]}
    }))}).catch(err=>(dispatch({
            type: LOGIN_FAIL,
               })))
            }



    export const logout =()=> ( { type: LOGOUT_SUCCESS })
        