import React, { useState, useEffect, Fragment } from "react"
import { Link } from 'react-router-dom'
import Cookies from "universal-cookie"
import axios from "axios";

import styled from 'styled-components'
import "./LeftNav.css"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
  width: 100%;

`

const LeftNav = (props) => {
  const cookies = new Cookies()
  const [sources, setSources] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [grid, setGrid] = useState([]);

  const creategrid = () => {
    setGrid(sources.map(item => {
      <a href={"/teams/" + item.attributes.category + "/" + item.attributes.username} key={item.attributes.name} className="nav_link active">
        <img src={"/" + item.attributes.category + ".png"} alt={item.attributes.name} className="teamicon" />
        <span className="nav_name">{item.attributes.name}</span>
      </a>
    }))
  }

  useEffect(() => {
    let temp
    temp = cookies.get("token");
    const pathname = window.location.pathname; //returns the current url minus the domain name
    const lastitem = pathname.substring(pathname.lastIndexOf("/") + 1);

    if (temp == null) {
      temp = "9999999";
    }

    const url = `https://chunkysports.com/api/v1/getsources/${temp}`;

    axios
      .get(url)
      .then((response) => {
        setSources(response.data.data);
        console.log("Uploaded data", response.data.data);
      })
      .catch((response) => console.log(response));
  }, [])

  console.log("Sources data before return", sources)
  return (
    <div className={`bg-nav h-full w-full transition duration-500 overflow-hidden max-w-[300px] md:max-w-full ${props.sidebarOpen ? "translate-x-0" : "-translate-x-full"}`} >
      {/* hello */}
      <nav className="">
        <div>
          <Link to="/source" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Company</span> </Link>

          <div className="nav_list">
            <Link to="" className="nav_link active">
              {" "}
              <i className="bx bx-grid-alt nav_icon"></i>{" "}
              <span className="nav_name">Dashboard</span>{" "}
            </Link>
            <Link to="" className="nav_link">
              {" "}
              <i className="bx bx-user nav_icon"></i>{" "}
              <span className="nav_name">Users</span>{" "}
            </Link>
            <Link to="" className="nav_link">
              {" "}
              <i className="bx bx-message-square-detail nav_icon"></i>{" "}
              <span className="nav_name">Messages</span>{" "}
            </Link>
            <Link to="" className="nav_link">
              {" "}
              <i className="bx bx-bookmark nav_icon"></i>{" "}
              <span className="nav_name">Bookmark</span>{" "}
            </Link>
            <Link to="" className="nav_link">
              {" "}
              <i className="bx bx-folder nav_icon"></i>{" "}
              <span className="nav_name">Files</span>{" "}
            </Link>
            <Link to="" className="nav_link">
              {" "}
              <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
              <span className="nav_name">Stats</span>{" "}
            </Link>
          </div>


        </div>
      </nav>
    </div>
  )
}

export default LeftNav