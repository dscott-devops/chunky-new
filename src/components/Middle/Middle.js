import React, { useState, useEffect, Fragment } from "react";
import "./Middle.css";
import Mupdates from "../Mupdates/Mupdates";
import Status from "../Status/Status";
import Mnews from "../Mnews/Mnews";

const Middle = () => {
  return (
    <div className="middle">
      <Mupdates />
      <Status />
      <Mnews />
    </div>
  );
};

export default Middle;
