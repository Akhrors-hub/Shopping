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
import { Provider } from "react-redux"
import Login from "./components/Login"
import Modal from "react-modal"
import Persist from "./components/Persist";
import { getCookie } from "./utils/cookie";




const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
function App() {
 
  const [modalText, setModalText] = useState("text")
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
  }

  function closeModal() {
    setIsOpen(false);
  }
  function modalAlert(msg){
    setModalText(msg)
    openModal()
  }
  
  return (

        <Provider store={store}>
         <Persist/>
    <div className="App">
<Router> 
<Navbar/>
<div>
    
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=" Error Message"
      >
        <button onClick={closeModal}>close</button>
        <div>{modalText}</div>
       
      </Modal>
    </div>
  <Routes>
  <Route path = "/" element = {<Home />}> </Route>
  <Route path = "/product/add" element = {<AddProduct />}> </Route>
<Route path = "/register" element = {<Register />}> </Route>
<Route path = "/login" element = {<Login />}> </Route>
  </Routes>
  <Footer />
</Router>

    </div>
       </Provider>

  );
}

export default App;
