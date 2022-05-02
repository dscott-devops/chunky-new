import React, { useState, useEffect, Fragment } from "react"
import "./Right.css"

const Right = () => {

  const[lg, setstate] = useState ([
    {id:1, img:"canela.jpg", name: "Something"},
    {id:2, img:"bigass.jpg", name: "Something"},
    {id:3, img:"doggy.jpg", name: "Something"},
    {id:4, img:"fly.jpg", name: "Something"},
    {id:5, img:"forget.jpg", name: "Something"},
    {id:6, img:"halfway.jpg", name: "Something"},
    {id:7, img:"legday.jpg", name: "Something"}


  ])
  
  return (
    <div className="right">
      {lg.map((i) => (
        
        <div className="right1" key={i.id}>
       
        <div className="rightimg">
        <img src={i.img} alt={i.name} />
        </div>
        <div className="rightname">{i.name}</div>

        </div>
      ))}
     
    </div>   
  )
}

export default Right