import React, { useState } from 'react';
import axios from "../utils/axios"
import { connect } from "react-redux"
import { login } from "../actions/authactions"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Center = styled.div`
margin: 100px auto;
width:178px;


`
const InputLabel =  styled.label`
width: 100px;
display: block;
margin-top:10px;


`
const Title = styled.h2`
text-align: center;
`
const Button = styled.button`
margin-left: 110px;
margin-top:10px;

`
const Form = styled.form`
margin:10px;

`

const Login = ({auth, login}) => {
  const navigate = useNavigate()
  // State to store form data
  const [formData, setFormData] = useState({
       email: '',
    password: '',
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here, you can perform any validation or submit the data to the server.
    // For this example, we'll simply display an alert with the entered data.
 
   login(formData)

  };
console.log(auth)
if(auth&&auth.isAuth){
  navigate("/")
}
  return (
    <Center>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
       
        <div>
          <InputLabel>Email:</InputLabel>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <InputLabel>Password:</InputLabel>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </Form>
    </Center>
  );
};
const mapStateToProps = state =>({auth: state}) 
export default connect(mapStateToProps,{login}) (Login);
