import React, { useState, useEffect, Fragment } from "react"
import { FaVideo, FaImage, FaRegImages, FaGrinAlt, FaRegGrinAlt} from 'react-icons/fa'

import "./Status.css"

const Status = () => {

  
  
  return (
    <div className="status">
      <div className="statusf">
        <div className="statusfimg">
          <span>
            <img src={"https://" + window.location.host + "/me.jpg" }/>
          </span>
        </div>
        <div className="statusfi">
          <input type="text" className="statusfin" placeholder="Put your thoughts here" />
        </div>
      </div>
      <div className="statusse">
        <span className="statuseicon">
        <FaVideo className="live"/>
        <span className="text"> Live </span>
        </span>
        <span className="statuseicon">
        <FaRegImages className="photo"/>
        <span className="text"> Photo </span>

        </span>
        <span className="statuseicon">
        <FaRegGrinAlt className="feeling"/>
        <span className="text"> Feeling </span>
        </span>

        
       
        

      </div>
     
    </div>   
  )
}

export default Status