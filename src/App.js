import React, { useState } from "react"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import axios from "./utils/axios"
import logo from './logo.svg';
import Home from "./pages/Home"
import AddProduct from "./components/AddProduct";
import styled from "styled-components"
import Register from "./components/Register";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { store } from "./store"
import { Provider, useSelector } from "react-redux"
import Login from "./components/Login"
import Modal from "react-modal"
import Persist from "./components/Persist";
import { getCookie } from "./utils/cookie";
import Products from "./components/Products";
import Admin from "./pages/Admin"
import AppHeader from "./Layout/AppHeader"
import AppSidebar from "./Layout/AppSidebar"
import AppFooter from "./Layout/AppFooter"
import ResizeDetector from 'react-resize-detector';
import cx from 'classnames'
import DetailedProducts from "./components/DetailedProducts";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    zIndex: 99
  },
};
Modal.setAppElement('#root');
function App() {
  
  let auth = useSelector(state => state.auth)
  let ThemeOptions = useSelector(state => state.ThemeOptions)
  const {
    colorScheme,
    enableFixedHeader,
    enableMobileMenu,
    enableFixedFooter,
    enableFixedSidebar,
    enableClosedSidebar,
    enablePageTabsAlt,
  } = ThemeOptions
  const user = auth?auth.user:null
  const isAuth = auth?auth.isAuth:false
  const [modalText, setModalText] = useState("text")
  const [modalIsOpen, setIsOpen] = React.useState(false);
  console.log(modalIsOpen)
  const [width, setWidth] = useState(undefined)
  const [closedSmallerSidebar, setClosedSmallerSidebar] = useState(false)
  axios.interceptors.response.use((response)=>response,(err)=>{
console.log(err)
   if(err.response&&err.response.data.error){
     modalAlert(err.response.data.error)
    }
    return Promise.reject(err)
}
   )
  function openModal() {
    setIsOpen(true);
 
    console.log('open modal')
  }
  console.log()
  function closeModal() {
    setIsOpen(false);
    console.log("teest")
  }
  function modalAlert(msg){
    console.log('test modal')
    setModalText(msg)
    openModal()
  }
  const onResize = (width) => setWidth(width);
  function renderIfAdmin (value){
    if(user&&user.type=="Admin"){
      return value
    }else{
      return null
    }

  }
  return (

       
    <div className="App">
        <Router> 
 <div className={user&&user.type=="Admin"?cx(
                    "app-container app-theme-" + colorScheme,
                    {'fixed-header': enableFixedHeader},
                    {'fixed-sidebar': enableFixedSidebar || width < 1250},
                    {'fixed-footer': enableFixedFooter},
                    {'closed-sidebar': enableClosedSidebar || width < 1250},
                    {'closed-sidebar-mobile': closedSmallerSidebar || width < 1250},
                    {'sidebar-mobile-open': enableMobileMenu},
                ):isAuth?cx( "app-container app-theme-" + colorScheme,
                {'fixed-header': enableFixedHeader}):" "}>
                    <ResizeDetector handleWidth onResize={onResize} />
  
       <AppHeader />
       
        <div className="app-main">
        {user&&user.type=="Admin"&&<AppSidebar/>}
            <div className="app-main__outer">
                <div className="app-main__inner">
            
       
   




      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=" Error Message"
      >
        <button onClick={closeModal}>close</button>
        <div>{modalText}</div>
       
      </Modal>
   
  <Routes>
  <Route path = "/" element = {<Home />}> </Route>
  <Route path = "/product/add" element = {user&&user.type=="Admin"?<AddProduct />:<Home />}> </Route>
  <Route path = "/products" element = {<Products />}> </Route>
<Route path = "/register" element = {isAuth?<Home />:<Register />}> </Route>
<Route path = "/login" element = {isAuth?<Home />:<Login />}> </Route>
<Route path = "/admin" element = {user&&user.type=="Admin"?<Admin />:<Home />}> </Route>
<Route path = "/detailedProducts" element = {user&&user.type=="Admin"?<DetailedProducts />:<Home />}> </Route>
  </Routes>
  
  {window.location.pathname!="/login"&&window.location.pathname!="/register"&&<Footer />}</div>
  </div>
  </div>


</div>
</Router>
 </div>
 
  );
}

export default App;
