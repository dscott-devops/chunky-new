import React, { useState, useEffect, Fragment } from "react"
import "./Signup.css"
import Registration from "../Registration/Registration"


const Signup = (props) => {

  

  
  
  return (
    <div className="middle">
      <Registration handleSuccessfulAuth={props.handleSuccessfulAuth}/>            
    </div>   
  )
}

export default Signup