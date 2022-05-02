import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const LeftNav = (props) => {
  console.log("LeftNav Props", props);
  return (
    <Fragment>
      <div className="h-full w-1/3 bg-nav"></div>
      {/* <div className="l-navbar show" id="nav-bar" style={{ marginTop: "65px" }}>
        <nav className="nav">
          <div>
            <Link to="/source" className="nav_logo">
              {" "}
              <i className="bx bx-layer nav_logo-icon"></i>{" "}
              <span className="nav_logo-name">Company</span>{" "}
            </Link>
            {props.isLoggedin && (
              <div className="nav_list">
                <a href="#" className="nav_link active">
                  {" "}
                  <i className="bx bx-grid-alt nav_icon"></i>{" "}
                  <span className="nav_name">Dashboard</span>{" "}
                </a>
                <a href="#" className="nav_link">
                  {" "}
                  <i className="bx bx-user nav_icon"></i>{" "}
                  <span className="nav_name">Users</span>{" "}
                </a>
                <a href="#" className="nav_link">
                  {" "}
                  <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                  <span className="nav_name">Messages</span>{" "}
                </a>
                <a href="#" className="nav_link">
                  {" "}
                  <i className="bx bx-bookmark nav_icon"></i>{" "}
                  <span className="nav_name">Bookmark</span>{" "}
                </a>
                <a href="#" className="nav_link">
                  {" "}
                  <i className="bx bx-folder nav_icon"></i>{" "}
                  <span className="nav_name">Files</span>{" "}
                </a>
                <a href="#" className="nav_link">
                  {" "}
                  <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
                  <span className="nav_name">Stats</span>{" "}
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div id="mySidenav" className="sidenav-1">
        {" "}
        <a href="#">About</a> <a href="#">Services</a> <a href="#">Clients</a>{" "}
        <a href="#">Contact</a>{" "}
      </div> */}
    </Fragment>
  );
};

export default LeftNav;
