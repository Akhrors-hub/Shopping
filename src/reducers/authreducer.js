import axios from "../utils/axios"
import { USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
   REGISTER_FAIL } from "../actions/type.js"
import { updateCookie } from "../utils/cookie.js"
let interceptor = null;
function setAuthTokenHeader (token){
    console.log("Set headers")
    console.log(token)
    axios.interceptors.request.eject(interceptor)
    interceptor = axios.interceptors.request.use(config => {
        config.headers["auth-token"] = token
        console.log(config)
                return config
     })
   }    

const initialState = {
    isAuth: false,
    user: null,
    token: null
}

function authReducer (state= initialState, action){
    console.log(action, state)
  switch (action.type) { 
        case USER_LOADED:
            if(action.payload!={}){
                setAuthTokenHeader(action.payload.token)
                console.log(action.payload.token)
            return action.payload}else{
                setAuthTokenHeader(null)
                return {...state,isAuth: false, user: null, token: null}
            }
        case REGISTER_SUCCESS: 
        case LOGIN_SUCCESS: 
        updateCookie("isAuth", true)
        updateCookie("user", action.payload.user)
        updateCookie("token", action.payload.token)
        setAuthTokenHeader(action.payload.token)
        return {...state,isAuth: true,user: action.payload.user,token:action.payload.token}
        case LOGOUT_SUCCESS: 
       
        case REGISTER_FAIL: 
        case LOGIN_FAIL:
            updateCookie("isAuth", false)
            updateCookie("user", null)
            updateCookie("token", null)
            setAuthTokenHeader(null)
    return {...state,isAuth: false, user: null, token: null}
    
    }
    return state
}

export default authReducer;