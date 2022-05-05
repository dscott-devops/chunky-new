import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  FaThumbsUp,
  FaHeart,
  FaSmile,
  FaAngry,
  FaRegGrinAlt,
  FaVideo,
  FaImage,
  FaRegImages,
  FaGrinAlt,
} from "react-icons/fa";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import {
  Avatar,
  Box,
  Divider,
  Typography,
  Link as MuiLink,
  Grid,
} from "@mui/material";

const Lumpitems = (props) => {
  //console.log(params);

  return (
    <Box
      key={props.id}
      sx={{
        bgcolor: "#e2e8f0",
        p: 3,
        boxShadow: 3,
        borderRadius: "2px",
      }}
    >
      {/* Head of post */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Link
          to={`/teams/${props.category}/${props.username}`}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            marginBottom: "0px",
          }}
          className="nav_logo"
        >
          <Box
            component="img"
            src={props.server + "/" + props.username + ".png"}
            alt={props.first + " " + props.last}
            sx={{ width: "50px", borderRadius: "50%" }}
          />

          <Typography sx={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
            {`${props.name} -  ${props.category}`}
          </Typography>
        </Link>
      </Box>
      <Divider />

      {/* post head avatar and link text */}
      <Box
        sx={{
          mt: 1.5,
          alignItems: "center",
          display: "flex",
        }}
      >
        <Avatar
          src={props.image}
          alt={props.title}
          sx={{ width: "50px", height: 50, mr: 2 }}
        />

        <div className="flex flex-col items-start justify-start">
          <a
            href={props.link}
            target="_blank"
            className="font-bold"
            rel="noreferrer"
          >
            {props.title}
          </a>

          <p className="text-sm text-slate-500">{props.created_at}</p>
        </div>
      </Box>

      {/* Post Description */}
      <Box sx={{}}>
        <Typography
          sx={{ fontSize: 16, fontWeight: "normal", color: "#000", my: 1 }}
        >
          {props.description}
        </Typography>

        {/* Post Main Image */}
        <MuiLink href={props.link} target="_blank" rel="noreferrer">
          <Box
            component="img"
            src={props.image}
            alt={props.title}
            sx={{
              width: "100%",
              height: "100%",
              "&:hover": { boxShadow: 3, borderRadius: "7px" },
            }}
          />
        </MuiLink>
      </Box>

      {/*  Rating Icons */}
      <Box>
        <Grid
          item
          container
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 2,
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "140px !important",
              width: "100%",
              alignItems: "center",
            }}
          >
            <FaThumbsUp size={20} color="blue" style={{ cursor: "pointer" }} />
            <FaHeart size={20} color="red" style={{ cursor: "pointer" }} />
            <FaSmile size={20} style={{ cursor: "pointer" }} />
            <FaAngry size={20} style={{ cursor: "pointer" }} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <p className="font-bold cursor-pointer">
              {Math.floor(Math.random() * 51)} Comments
            </p>
          </Grid>
        </Grid>
      </Box>

      <hr className="m-0" />
      <div className="flex items-center justify-between font-bold">
        <span className="flex items-center justify-start gap-2 cursor-pointer">
          <FaVideo className="live" />
          <span className=""> Live </span>
        </span>
        <span className="flex items-center justify-start gap-2 cursor-pointer">
          <FaRegImages className="photo" />
          <span className=""> Photo </span>
        </span>
        <span className="flex items-center justify-start gap-2 cursor-pointer">
          <FaRegGrinAlt className="feeling" />
          <span className=""> Feeling </span>
        </span>
      </div>

      {/* <div>
        {props.youtube && (
          <form>
            <input type="hidden" value={props.id} id="post-id" />
            <button
              type="button"
              onClick={() => clickHandler(props.id)}
              className="btn btn-primary"
            >
              Ban Lump
            </button>
          </form>
        )}
      </div> */}
    </Box>
  );
};

export default Lumpitems;
