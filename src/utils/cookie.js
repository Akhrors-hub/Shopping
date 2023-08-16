const COOKIE_NAME = "ecommerce"

const setCookie = (cookie)=> {
    console.log(cookie)
    let now = new Date()
    now.setTime(now.getTime()+3600*1000)
        document.cookie = `${COOKIE_NAME}=${JSON.stringify(cookie)};path=/;expires=${now.toUTCString()};` 
    console.log(`${COOKIE_NAME}=${JSON.stringify(cookie)};path=/;expires=${now.toUTCString()};` )
    }
    
export const getCookie = ()=>{
if(document.cookie){
    const cookies = document.cookie.split(";")
    let cookieData = ""
    cookies.forEach(cookie => {
        while(cookie.charAt(0)===" "){
            cookie = cookie.substring(1,cookie.length)
        }
        if (cookie.startsWith(COOKIE_NAME)){
            cookieData = cookie.replace(`${COOKIE_NAME}=`," ")
        }
    })
    const cookie = cookieData?JSON.parse(cookieData):{}
    return cookie
}else{
    return {}
}
   
}
export const updateCookie = (name, value)=> {
        const cookie = getCookie()
        cookie[name] = value
        setCookie(cookie)
      console.log(cookie)
}