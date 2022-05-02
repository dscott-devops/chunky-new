import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const OpenNav = () => {
  if (document.getElementById("mySidenav").style.width == "0px") {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  }
};

const Header = ({ isLoggedin, sidebarOpen, setSidebarOpen, chatOpen, setChatOpen }) => {
  // console.log("Header Props", props);

  let loggedin;
  if (isLoggedin) {
    loggedin = `<li className="nav-item"> <a className="nav-link" href="#">Logged In</a> </li>`;
  } else {
    loggedin = `<li className="nav-item"> <a className="nav-link" href="#">Logged Out</a> </li>`;
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-nav p-6 sticky w-screen bg-black">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        {/* <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
        <span className="font-semibold text-xl tracking-tight text-white">Chunky Sports</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center px-3 py-2 rounded text-teal-lighter border-teal-light hover:text-white cursor-pointer">
          {/* <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg> */}
        <AiOutlineMenu color="white" size={20} />
          </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        {/* <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
            Blog
          </a>
        </div> */}
        {/* <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a>
        </div> */}
        {/* <p className="text-white" onClick={()=>setChatOpen(true)}>Open</p> */}
      </div>
    </nav>
  );
};

export default Header;
