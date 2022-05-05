import React, { useState, useEffect, Fragment } from "react"
import { FaVideo, FaImage, FaRegImages, FaGrinAlt, FaRegGrinAlt} from 'react-icons/fa'
import { useParams } from "react-router-dom"
import axios from "axios"
import Lumpitems from "../Lumpitems/Lumpitems"

import "./Mnews.css"

const Mnews = () => {

  const params = useParams();
  console.log(params);

  const [source, setSource] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [update, setUpdate] = useState('');
  const timezoneOffset = (new Date()).getTimezoneOffset();

  console.log("Time Zone offset:" + timezoneOffset);


  useEffect(() => {   
    const pathname = window.location.pathname //returns the current url minus the domain name
    const lastitem = pathname.substring(pathname.lastIndexOf('/') + 1)
    
    const url = `https://chunkysports.com/api/v1/daily/${lastitem}`;

    axios
      .get(url)
      .then((response) => {
        setSource(response.data.data);
        setLoaded(true);
        console.log("Mnews api",response.data.data);
      })
      .catch((response) => console.log(response));
  }, [update]);

  const[s, setstate] = useState ([
    {id:1, userImg:"washingtoncommanders.png", name: "Canela", time: "1h", text: "Find me at big boss", postImg:"washingtoncommanders.png"},
    {id:2, userImg:"seattleseahawks.png", name: "Ebony Beauty", time: "2h", text: "I love this picture", postImg:"seattleseahawks.png"},
    {id:3, userImg:"baltimoreravens.png", name: "Ebony", time: "3h", text: "Post Text", postImg:"baltimoreravens.png"},
    {id:4, userImg:"buffalobills.png", name: "Ebony Beauty", time: "5h", text: "Good Picture", postImg:"buffalobills.png"},
    {id:5, userImg:"washingtonwizards.png", name: "Ebony Beauty", time: "5h", text: "Good Picture", postImg:"washingtonwizards.png"}
   


  ])


  const clickHandler = (id) => {

    const url = `/api/v1/ban/${id}`
    const pathname = window.location.pathname //returns the current url minus the domain name
    const lastitem = pathname.substring(pathname.lastIndexOf('/') + 1)
    
    

    axios
    .get(url)
    .then((response) => {
      setUpdate(id)
      console.log(response.data.data);
    })
    .catch((response) => console.log(response));


  };
  
  let server
  server = window.location.host
  let protocol
  // eslint-disable-next-line no-restricted-globals
  protocol = location.protocol
  server = protocol + "//" + server

  
  return (
    <div className="w-full flex flex-col gap-4 transition duration-500 p-3">

      {source.map((post) => (
         <Lumpitems
         key={post.id}
         server={server}
         username={post.attributes.username}
         name={post.attributes.name}
         category={post.attributes.category}
         image={post.attributes.image}
         title={post.attributes.title}
         link={post.attributes.link}
         created_at={post.attributes.created_at}
         description={post.attributes.description}
         youtube={post.attributes.youtube}     
         
         />


      ))}
     
    </div>   
  )
}

export default Mnews