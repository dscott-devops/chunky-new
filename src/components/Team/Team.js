import React, { useState, useEffect, Fragment } from "react"
import "./Team.css"
import Mupdates from "../Mupdates/Mupdates"
import Status from "../Status/Status"
import Tnews from "../Tnews/Tnews"
import { Box } from "@mui/material"

const Team = () => {

  
  
  return (
    <Box sx={{  }}>
      <Status/>
      <Tnews/>
          
    </Box>   
  )
}

export default Team