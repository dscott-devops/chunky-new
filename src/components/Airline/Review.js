import React, { Fragment } from "react";
import styled from "styled-components";
import "./Review.css"
import Rating from './Rating/Rating'

const Review = (props) => {
  const { score, title, description } = props.attributes
  return (
    <div className="card">
      <div className="rating-container">
        <Rating score={score}></Rating>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>

  )



}

export default Review