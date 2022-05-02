import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import Login from "./Login/Login";
import styled from "styled-components";
import Header from "./Header/Header";
import LeftNav from "./LeftNav/LeftNav";
import Middle from "./Middle/Middle";
import Signup from "./Signup/Signup";
import Team from "./Team/Team";
import Home from "./Home/Home";
import Urlform from "./Urlform/Urlform";
import "./App.css";
import ChatArea from "./ChatArea/ChatArea";
import PageLayout from "./PageLayout/PageLayout";
import TeamLinks from "./TeamLinks/TeamLinks";

const ProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

const OpenNav = () => {
  if (document.getElementById("mySidenav").style.width == "0px") {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  }
};


const App = () => {
  const cookies = new Cookies();
  const [token, setToken] = useState("");

  const [state, setState] = useState({
    isLoggedin: false,
    user: {},
    lumps: {},
    sources: {},
  });

  const getToken = () => {
    const temp = cookies.get("token");
    //console.log("Token Temp",temp)
    setToken(temp);
  };

  const checkLoginStatus = () => {
    const temp = cookies.get("token");

    const url = `https://chunkysports.com/api/v1/loggedin/${temp}`;

    //console.log("Token:", token)

    axios
      .get(url)
      .then((response) => {
        console.log("Checking Login Status", response);
        if (response.data.isLoggedin && state.isLoggedin === false) {
          setState({
            isLoggedin: true,
            user: response.data.user,
            lumps: response.data.lumps,
            sources: response.data.sources,
          });
        } else if (!response.data.isLoggedin && state.isLoggedin) {
          setState({
            isLoggedin: false,
            user: {},
            lumps: response.data.lumps,
          });
        }
      })
      .catch((response) => console.log("Failed response", response));
  };

  const handleSuccessfulAuth = (data) => {
    //Todo update parent component
    console.log("Data Received", data)
    handleLogin(data);   
    console.log("Handle Successful Auth")
  };

  const handleLogoutClick = () => {
    const url = "/logout";
    axios
      .delete(url, { withCredentials: true })
      .then((response) => {
        //console.log("Successful logout", response)
        handleLogout();
      })
      .catch((response) =>
        console.log("Error Failed Logout response", response)
      );
  };

  const handleLogin = (data) => {
    console.log("Handle Login", data)
    setState({
      isLoggedin: true,
      user: data.user,
      lumps: data.lumps,
      sources: data.sources
    });
    console.log("Before Cookie",data)
    cookies.set("token", data.user.authentication_token, {
      path: "/",
      domain: "localhost",
      sameSite: "lax",
    });
  };

  const handleLogout = () => {
    //console.log("Handle Login")
    setState({
      isLoggedin: false,
      user: {},
      lumps: {}
    });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Router>
      <PageLayout state={state} >
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sources={state.sources}
              lumps={state.lumps}
              user={state.user}
              isLoggedin={state.isLoggedin}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              sources={state.sources}
              lumps={state.lumps}
              user={state.user}
              isLoggedin={state.isLoggedin}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              isLoggedin={state.isLoggedin}
              handleSuccessfulAuth={handleSuccessfulAuth}
            />
          }
        />
        <Route
          path="/login"
          element={<Login handleSuccessfulAuth={handleSuccessfulAuth} />}
        />
        <Route path="/urls" element={<Urlform />} />
       <Route
          path="/source/:id"
          element={<Middle user={state.user} isLoggedin={state.isLoggedin} />}
        />
        <Route
          path="/teams/nba/:id"
          element={<Team user={state.user} isLoggedin={state.isLoggedin} />}
        />
         <Route
          path="/teams"
          element={<TeamLinks user={state.user} isLoggedin={state.isLoggedin} />}
        />
        <Route
          path="/teams/nfl/:id"
          element={<Team user={state.user} isLoggedin={state.isLoggedin} />}
        />
        <Route
          path="/teams/nhl/:id"
          element={<Team user={state.user} isLoggedin={state.isLoggedin} />}
        />
        <Route
          path="/teams/mlb/:id"
          element={<Team user={state.user} isLoggedin={state.isLoggedin} />}
        />
              
      </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;
