import React, { useState, useEffect, Fragment } from "react"
import { FaVideo, FaImage, FaRegImages, FaGrinAlt, FaRegGrinAlt} from 'react-icons/fa'
import { useParams } from "react-router-dom"
import axios from "axios"
import "./Urlform.css"


const Urlform = () => {

  
  const [sources, setSources] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [enteredSource, setSource] = useState('');
  const [enteredUrltype, setUrltype] = useState('');
  const [enteredLinks, setLinks] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();

  useEffect(() => {
  const url = `https://chunkysports.com/api/v1/sourcenames`;

    axios
      .get(url)
      .then((response) => {
        setSources(response.data.data);
        setLoaded(true);
        console.log(response.data.data);
      })
      .catch((response) => console.log(response));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    axios
      .post("/api/v1/bulkurls", { urltype: enteredUrltype, source: enteredSource, links: enteredLinks })
      .then((response) => {
        

        console.log(response);
      })
      .catch((response) => {});
  };

  const selectChangeHandler = (event) => {
    setSource(event.target.value);
    console.log(event.target.value);

  };

  const urlChangeHandler = (event) => {
    setUrltype(event.target.value);
    console.log(event.target.value);


  };

  const linksChangeHandler = (event) => {
    setLinks(event.target.value);
    console.log(event.target.value);


  };







  return (
    <div className="middle">
    <form onSubmit={handleSubmit}>
      <h1>Create Bulk Urls</h1>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com"/>
  
    <label htmlFor="exampleFormControlSelect1">Sources</label>
    <select className="form-control mb-3" id="exampleFormControlSelect1" 
     value={enteredSource}
     onChange={selectChangeHandler}
    
    >
    {
    sources.map((post) => (
      <option key={post.id} value={post.id}>{post.attributes.first_name + " " + post.attributes.last_name}</option>
      
      ))
      }
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect2">Url Type</label>
    <select className="form-control mb-3" id="selectUrltype"
    value={enteredUrltype}
    onChange={urlChangeHandler}
    
    >
      <option>NFL</option>
      <option>NBA</option>
      <option>NHL</option>
      <option>MLB</option>      
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Links</label>
    <textarea className="form-control mb-3" id="txtAreaLinks" rows="10"
     value={enteredLinks}
     onChange={linksChangeHandler}
    
    ></textarea>
  </div>
  <div className="form-group">   
    <button type="Submit" className="btn btn-primary">Submit</button>
  </div>

  
</form>
</div>
  )



}

export default Urlform