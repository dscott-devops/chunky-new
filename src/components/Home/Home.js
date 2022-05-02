import React, { useState, useEffect, Fragment } from "react"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import styled from "styled-components"

import Middle from "../Middle/Middle"
import Mnews from "../Mnews/Mnews"
import Lump from "../Lump/Lump"




const Home = (props) => {

  // console.log("User", props.user)
  // console.log("Sources", props.sources)
  console.log("Lumps", props)

  return (

    <div className="w-full h-full transition duration-500">
      <Lump sources={props.sources} lumps={props.lumps} user={props.user} isLoggedin={props.isLoggedin} />

    </div>
  )

}

export default Home
