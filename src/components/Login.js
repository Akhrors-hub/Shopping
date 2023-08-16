import React, { useState } from 'react';
import axios from "axios"
import { connect } from "react-redux"
import { login } from "../actions/authactions"
import { useNavigate } from 'react-router-dom';
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
       
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
const mapStateToProps = state =>({auth: state}) 
export default connect(mapStateToProps,{login}) (Login);
