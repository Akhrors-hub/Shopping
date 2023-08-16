import { USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
   REGISTER_FAIL } from "../actions/type.js"
import { updateCookie } from "../utils/cookie.js"


const initialState = {
    isAuth: false,
    user: null
}

function authReducer (state= initialState, action){
    console.log(action, state)
    switch (action.type) {
        case USER_LOADED:
            if(action.payload!={}){
            return action.payload}else{
                return {...state,isAuth: false, user: null, token: null}
            }
        case REGISTER_SUCCESS: 
        case LOGIN_SUCCESS: 
        updateCookie("isAuth", true)
        updateCookie("user", action.payload.user)
        updateCookie("token", action.payload.token)
        return {...state,isAuth: true,user: action.payload.user,token:action.payload.token}
        case LOGOUT_SUCCESS: 
       
        case REGISTER_FAIL: 
        case LOGIN_FAIL:
            updateCookie("isAuth", false)
            updateCookie("user", null)
            updateCookie("token", null)
    return {...state,isAuth: false, user: null, token: null}

    }
}

export default authReducer;