import React, { useState, useEffect, Fragment } from "react"
import "./Team.css"
import Mupdates from "../Mupdates/Mupdates"
import Status from "../Status/Status"
import Tnews from "../Tnews/Tnews"

const Team = () => {

  
  
  return (
    <div className="w-full flex flex-col gap-4 transition duration-500 p-3">
      <Status/>
      <Tnews/>
          
    </div>   
  )
}

export default Team