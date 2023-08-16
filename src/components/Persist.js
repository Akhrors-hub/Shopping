import { useEffect } from "react";
import { getCookie } from "../utils/cookie";
import { loadUser } from "../actions/authactions";
import { useDispatch } from "react-redux";



function Persist({children}){
    const dispatch = useDispatch()
    useEffect(()=>{
        const cookie = getCookie()
        dispatch(loadUser(cookie))
      })
    return children
}
export default Persist;