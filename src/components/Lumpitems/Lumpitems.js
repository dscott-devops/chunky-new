import React, { useState, useEffect, Fragment } from "react";
import { Link } from 'react-router-dom'
import {
  FaThumbsUp,
  FaHeart,
  FaSmile,
  FaAngry,
  FaRegGrinAlt, FaVideo, FaImage, FaRegImages, FaGrinAlt
} from "react-icons/fa";

const Lumpitems = (props) => {
  //console.log(params);

  return (
    <div key={props.id} className="p-3 shadow-lg rounded-lg bg-slate-200 flex flex-col gap-2">
      <div className="flex items-center justify-start gap-2">
      <Link to={"/teams/" + props.category + "/" + props.username} style={{ textDecoration: 'none' }} className="nav_logo"> 

        {/* <div className=""> */}
        <img
          src={props.server + "/" + props.username + ".png"}
          alt={props.first + " " + props.last}
          className="h-[50px] rounded-full"
        />
        {/* </div> */}
        <p className="font-bold">{props.name + " - " + props.category}</p>
        </Link>
      </div>
      <hr className="m-0"></hr>
      <div className="flex items-start justify-start gap-2">
        {/* <div className=""> */}
        <img src={props.image} alt={props.title}
          className="h-[50px] w-[50px] bg-cover rounded-full"
        />
        {/* </div> */}
        <div className="flex flex-col items-start justify-start">
          <a href={props.link} target="_blank" className="font-bold">
            {props.title}
          </a>

          <p className="text-sm text-slate-500">{props.created_at}</p>
        </div>
      </div>
      <div className="">
        <div className="">{props.description}</div>
        <div className="">
          <a href={props.link} target="_blank">
            <img src={props.image} alt={props.title} />
          </a>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2 ">
            <FaThumbsUp size={20} color="blue" />
            <FaHeart size={20} color="red" />
            <FaSmile size={20}  />
            <FaAngry size={20} />
          </div>
          <p className="font-bold cursor-pointer">{Math.floor(Math.random() * 51)} Comments</p>
        </div>
      </div>
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
    </div>
  );
};

export default Lumpitems;
