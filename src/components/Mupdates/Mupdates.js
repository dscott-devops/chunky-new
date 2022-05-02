import React, { useState, useEffect, Fragment } from "react"
import "./Mupdates.css"

const Mupdates = () => {

  const[s, setstate] = useState ([
    {id:1, img:"washingtoncommanders.png", name: "Something"},
    {id:2, img:"seattleseahawks.png", name: "Something"},
    {id:3, img:"baltimoreravens.png", name: "Something"},
    {id:4, img:"buffalobills.png", name: "Something"},
    {id:5, img:"washingtonwizards.png", name: "Something"},


  ])
  
  return (
    <div className="updates">
      {s.map((up) => (
        
        <div className="updatesc" key={up.id}>
          <div className="updatesb">
          <img src={"http://" + window.location.host + "/" + up.img} alt={up.name} />
            <div className="updatesbo">
              <div className="updatesboimg">
                <img src={"http://" + window.location.host + "/" + up.img} alt={up.name} />
              </div>
       
          <div className="updatesboname">{up.name}</div>
        </div>
        </div>
        </div>
      ))}
     
    </div>   
  )
}

export default Mupdates