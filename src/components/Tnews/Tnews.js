import React, { useState, useEffect, Fragment } from "react";
import {
  FaVideo,
  FaImage,
  FaRegImages,
  FaGrinAlt,
  FaRegGrinAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import Lumpitems from "../Lumpitems/Lumpitems"


import "./Tnews.css";

const Tnews = () => {
  const params = useParams();
  console.log(params);

  const [source, setSource] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const timezoneOffset = new Date().getTimezoneOffset();

  useEffect(() => {
    if (Object.keys(params).length === 0) {
      const url = "https://chunkysports.com/api/v1/daily/20";
      console.log("Empty");
    }

    const url = `https://chunkysports.com/api/v1/nba/${params.id}`;

    axios
      .get(url)
      .then((response) => {
        setSource(response.data.data);
        setLoaded(true);
        console.log(response.data.data);
      })
      .catch((response) => console.log(response));
  }, []);

  const [s, setstate] = useState([
    {
      id: 1,
      userImg: "canela.jpg",
      name: "Canela",
      time: "1h",
      text: "Find me at big boss",
      postImg: "canela.jpg",
    },
    {
      id: 2,
      userImg: "ebony300.jpg",
      name: "Ebony Beauty",
      time: "2h",
      text: "I love this picture",
      postImg: "ebony1000.jpg",
    },
    {
      id: 3,
      userImg: "ebonywall2-300.jpg",
      name: "Ebony",
      time: "3h",
      text: "Post Text",
      postImg: "ebonywall2.jpg",
    },
    {
      id: 4,
      userImg: "ebonywall3-300.jpg",
      name: "Ebony Beauty",
      time: "5h",
      text: "Good Picture",
      postImg: "ebonywall3.jpg",
    },
    {
      id: 5,
      userImg: "ebonywall.png",
      name: "Ebony Beauty",
      time: "5h",
      text: "Good Picture",
      postImg: "ebonywall.png",
    },
  ]);

  let server
  server = window.location.host
  let protocol
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
  );
};

export default Tnews;
