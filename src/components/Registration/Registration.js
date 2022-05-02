import React, { Component } from 'react';
import { useState, useEffect, Fragment } from "react"
import axios from "axios"
import "./Registration.css"
import {useNavigate } from 'react-router-dom'

const Registration = (props) => {

    const navigate = useNavigate()
   const [state, setState] = useState({

    email: "",
    password: "",
    password_confirmation: "",
    username: "",
    mobile: "",
    firstname: "",
    lastname: "",
    slogan: "",
    bio: "",
    registrationErrors: ""

  })


 

  const handleSubmit = (e) =>  {

    console.log("Form submitted");
    
    const url = "https://chunkysports.com/api/v1/users"

    axios
    .post(url, {
      user: {
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation,
        username: state.username,
        mobile: state.mobile,
        firstname: state.firstname,
        lastname: state.lastname,
        slogan: state.slogan,
        bio: state.bio
        
           }

    }, { withCredentials: true })
    .then((response) => {
     console.log("Successful response", response);
     if (response.data.isLoggedin )
     {
        props.handleSuccessfulAuth(response.data)
        navigate("/")
     }
    })
    .catch((response) => console.log("Failed response", response));
    e.preventDefault();
}

  

  const handleChange = (event) => {       
    console.log(event.target.value);
    setState({      ...state,   
      [event.target.name]: event.target.value  
    });
  
  }

    return (
      <div>
     

<center>
        <form onSubmit={handleSubmit} className="form-group" action=" " method="post"  id="contact_form">
<fieldset>


<legend><center><h2><b>Registration Form</b></h2></center></legend><br/>


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
  <label className="col-lg-6 control-label" >Confirm Password</label> 
    <div className="col-lg-6 inputGroupContainer">
    <div className="input-group">
  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input
           type="password" 
          name="password_confirmation" 
          placeholder="Confirm Password"
          className="form-control" 
          value={state.password_confirmation} 
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
          required />
    </div>
  </div>
</div>

<div className="form-group">
  <label className="col-lg-6 control-label">First Name</label>  
  <div className="col-lg-6 inputGroupContainer">
  <div className="input-group">
  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
    
          <input
           type="text" 
          name="firstname" 
          placeholder="First Name" 
          className="form-control"  
          value={state.firstname} 
          onChange={handleChange} 
          required />
    </div>
  </div>
</div>



<div className="form-group">
  <label className="col-lg-6 control-label" >Last Name</label> 
    <div className="col-lg-6 inputGroupContainer">
    <div className="input-group">
  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
           <input
           type="text" 
          name="lastname" 
          placeholder="Last Name"
          className="form-control"
          value={state.lastname} 
          onChange={handleChange} 
          required />
    </div>
  </div>
</div>

<div className="form-group">
  <label className="col-lg-6 control-label" >Slogan</label> 
    <div className="col-lg-6 inputGroupContainer">
    <div className="input-group">
  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
           <input
           type="text" 
          name="slogan" 
          placeholder="Never take life seriously. Nobody gets out alive anyway"
          className="form-control"
          value={state.slogan} 
          onChange={handleChange} 
          required />
    </div>
  </div>
</div>
       
<div className="form-group">
  <label className="col-lg-6 control-label">Bio</label>  
    <div className="col-lg-6 inputGroupContainer">
    <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
           <textarea
           rows="4"
           type="text" 
          name="bio" 
          placeholder="Tell a little about yourself" 
          className="form-control" 
          value={state.bio} 
          onChange={handleChange} 
          required></textarea>
    </div>
  </div>
</div>

<div className="form-group">
  <label className="col-lg-6 control-label">Contact No.</label>  
    <div className="col-lg-6 inputGroupContainer">
    <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
           <input
           type="text" 
          name="mobile" 
          placeholder="(999)" 
          className="form-control" 
          value={state.mobile} 
          onChange={handleChange} 
          required />
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


export default Registration
