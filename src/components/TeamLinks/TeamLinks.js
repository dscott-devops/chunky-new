import React, { useState, useEffect }from 'react'
import "./TeamLinks.css"
import axios from "axios"
import TeamLink from "./TeamLink"

const client = axios.create({
  baseURL: "https://chunkysports.com/api/v1",
});

const TeamLinks = () => {
  const [sources,setSources] = useState([])
  const getSub = (subcategory) => {
    console.log("CommentID", subcategory)
    return sources
      .filter((source) => source.attributes.subcategory === subcategory)
      .sort(
        (a, b) =>
          a.attributes.subcategory - b.attributes.subcategory
      );
  };



  useEffect(() => {
    
    async function getSources() {
      const response = await client.get("/sourcenames");
      setSources(response.data.data);
      console.log("Reponse Data", response);
    }

    getSources();
  }, []);


  return (
    <div className="w-full flex flex-col gap-4 transition duration-500 p-3">
      {sources.map((post) => (
        <TeamLink
          key={post.id}
          id={post.id}
          category={post.attributes.category}
          username={post.attributes.username}
          first_name={post.attributes.first_name}
          last_name={post.attributes.last_name}
          subcategory={post.attributes.subcategory}        

        />
      ))
      }
    </div>
  )
}

export default TeamLinks