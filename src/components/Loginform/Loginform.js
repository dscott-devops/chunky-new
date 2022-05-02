import React, { Component } from 'react';
import { useState, useEffect, Fragment } from "react"
import {useNavigate } from 'react-router-dom'
import axios from "axios"
import "./Loginform.css"

const Loginform = (props) => {

  const navigate = useNavigate()

   const [state, setState] = useState({

    email: "",
    password: "",
    username: "",
   
  })

  

  const handleSubmit = (e) =>  {

    console.log("Form submitted");
    
    const url = "https://chunkysports.com/api/v1/login"

    axios
    .post(url, {
      user: {
        email: state.email,
        password: state.password,
        username: state.username,
               
           }

    })
    .then((response) => {
     console.log("Successful response", response);
     if (response.data.isLoggedin )
     {
        props.handleSuccessfulAuth(response.data)
      //   let site
      //   site = "http://" + window.location.host + "/"
      //   console.log("Site:", site)
      //  window.location.href = site;
      navigate("/")
      
        
     }
    })
    .catch((response) => console.log("Failed response"));
    e.preventDefault();
}

  

  const handleChange = (event) => {       
    
    console.log(event.target.value);
    setState({ ...state, 
      [event.target.name]: event.target.value  
    });
  
  }

    return (
      <div>
     

<center>
        <form onSubmit={handleSubmit} className="form-group" action=" " method="post"  id="contact_form">
<fieldset>


<legend><center><h2><b>Login Form</b></h2></center></legend><br/>


<div className="form-group">
  <label className="col-lg-6 control-label">E-Mail</label>  
    <div className="col-lg-6 inputGroupContainer">
    <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
    <input className="form-control"
           type="email" 
          name="email" 
          placeholder="E-Mail Address"
          value={state.email} 
          onChange={handleChange} 
          required />
    </div>
  </div>
</div>

<div className="form-group">
  <label className="col-lg-6 control-label" >Password</label> 
    <div className="col-lg-6 inputGroupContainer">
    <div className="input-group">
  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input
           className="form-control"
           type="password" 
          name="password" 
          placeholder='Password' 
          value={state.password} 
          onChange={handleChange} 
          required />
    </div>
  </div>
</div>


<div className="form-group">
  <label className="col-lg-6 control-label">Username</label>  
  <div className="col-lg-6 inputGroupContainer">
  <div className="input-group">
  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
  
            <input
           type="text" 
          name="username" 
          placeholder="Username" 
          className="form-control"
          value={state.username} 
          onChange={handleChange} 
          />
    </div>
  </div>
</div>


<div className="form-group">
  <label className="col-lg-6 control-label"></label>
  <div className="col-lg-6"><br/>
    <button type="submit" className="btn btn-primary" >SUBMIT <span className="glyphicon glyphicon-send"></span></button>
  </div>
</div>

</fieldset>
</form>
</center>



      </div>
      
    )
}


export default Loginform
