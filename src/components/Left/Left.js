import React, { useState, useEffect, Fragment } from "react"
import "./Left.css"

const Left = () => {

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
    <div className="left">
      {lg.map((i) => (
        
        <div className="left1" key={i.id}>
       
        <div className="leftimg">
        <img src={i.img} alt={i.name} />
        </div>
        <div className="leftname">{i.name}</div>

        </div>
      ))}
     
    </div>   
  )
}

export default Left