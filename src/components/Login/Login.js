import React, { useState, useEffect, Fragment } from "react"
import "./Login.css"
import Loginform from "../Loginform/Loginform"

const Login = (props) => {

  
  
  return (
    <div className="middle">
      <Loginform handleSuccessfulAuth={props.handleSuccessfulAuth} />
          
    </div>   
  )
}

export default Login