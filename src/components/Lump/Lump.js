/* eslint-disable no-restricted-globals */
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
import Cookies from "universal-cookie";
import "./Lump.css"
import Lumpitems from "../Lumpitems/Lumpitems"

import "./Lump.css";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const Lump = () => {
  const cookies = new Cookies();

  const params = useParams();
  //console.log(params);

  const [source, setSource] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    let temp
    temp = cookies.get("token");
    const pathname = window.location.pathname; //returns the current url minus the domain name
    const lastitem = pathname.substring(pathname.lastIndexOf("/") + 1);

    if (temp == null) {
      temp = '999999'
    }

    const url = `https://chunkysports.com/api/v1/getlumps/${temp}`;


    axios
      .get(url)
      .then((response) => {
        setSource(response.data.data);
        setLoaded(true);
        //console.log(response.data.data);
      })
      .catch((response) => console.log(response));
  }, [update, source.length]);


  const clickHandler = (id) => {
    const url = `/api/v1/ban/${id}`;
    const pathname = window.location.pathname; //returns the current url minus the domain name
    const lastitem = pathname.substring(pathname.lastIndexOf("/") + 1);

    axios
      .get(url)
      .then((response) => {
        setUpdate(id);
        //console.log(response.data.data);
      })
      .catch((response) => console.log(response));
  };


  let server
  server = window.location.host
  let protocol
  protocol = location.protocol
  server = protocol + "//" + server
  console.log("Server: ", server , source)


  return (
    <Grid
    item container
    xs={12}
    >
      {source.map((post) => (
        <Box key={post.id} sx={{ width:'100%',mt:2 }}>
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
        </Box>
      ))
      }
    </Grid>
  );
};

export default Lump;
