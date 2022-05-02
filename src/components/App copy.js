import React, { useState, useEffect, Fragment } from "react"
import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Collapsible from 'react-collapsible'
import $ from 'jquery'
import axios from 'axios';
import Cookies from 'universal-cookie';
import Login from "./Login/Login";
import styled from "styled-components"
import Header from "./Header/Header"
import LeftNav from "./LeftNav/LeftNav"
import Second from "./Second/Second"
import Source from "./Source/Source"
import Middle from "./Middle/Middle"
import Signup from "./Signup/Signup";
import Team from "./Team/Team"
import Urlform from "./Urlform/Urlform"
import "./App.css"




const ProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`

const OpenNav = () => {
  
  if(document.getElementById("mySidenav").style.width == "0px") {
		document.getElementById("mySidenav").style.width = "250px"
		document.getElementById("main").style.marginRight = "250px"
	} else {
		document.getElementById("mySidenav").style.width = "0"
		document.getElementById("main").style.marginRight = "0"
	}

}

const Sample = () => {
  return (
    <Fragment>
    <div className="row">
    <h2>Sample Text</h2>
    <div className="col"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ante non eros vestibulum tincidunt. Sed elit sapien, ultrices fringilla risus vel, condimentum aliquet enim. Etiam vestibulum ipsum ac nisl fermentum, vitae commodo lorem congue. Pellentesque pulvinar massa sed orci aliquam, non fermentum ipsum fermentum. Etiam consequat luctus lorem et molestie. Duis dictum id risus ac bibendum. Ut convallis rutrum lacinia. Aenean vitae orci turpis. Nullam finibus sed quam sed ultrices. Vivamus ullamcorper odio est, id consequat erat pretium ac. Morbi ipsum erat, pellentesque quis quam nec, vehicula aliquam risus. Cras dui risus, gravida nec turpis eget, pretium pharetra velit. Maecenas consectetur efficitur porta. Phasellus in magna non ipsum molestie rhoncus. Sed nisi ligula, dapibus eu nulla a, consequat consectetur dolor. In faucibus volutpat augue, vitae commodo neque molestie sagittis. Proin eget elit ultrices, aliquet massa ut, luctus justo. Mauris nunc metus, convallis vitae mattis nec, bibendum eu mauris. Sed feugiat finibus placerat. Nullam id ligula ornare, rutrum augue sed, ornare nulla. In mollis cursus nisl, in facilisis justo interdum eget. Donec iaculis tincidunt ante a rutrum. Nullam maximus hendrerit metus, a accumsan elit luctus ut. Mauris iaculis eget sem feugiat dapibus. Nam imperdiet neque nec dui tempus, quis eleifend nulla rutrum. Sed ultrices, lectus vel fringilla accumsan, risus sapien ornare mi, vitae rutrum lorem leo eget purus. Vivamus efficitur, ante sed pulvinar iaculis, enim augue interdum felis, eu tincidunt dui eros at neque. Nunc eu ex vitae ante convallis blandit. Quisque euismod rutrum tortor ac fermentum. Nunc magna nulla, tincidunt nec mauris a, tempus aliquet nisl. In dolor turpis, tristique sed nisi id, gravida posuere odio. Quisque suscipit odio massa, sed consectetur metus mattis non. </div>
    <div className="col"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ante non eros vestibulum tincidunt. Sed elit sapien, ultrices fringilla risus vel, condimentum aliquet enim. Etiam vestibulum ipsum ac nisl fermentum, vitae commodo lorem congue. Pellentesque pulvinar massa sed orci aliquam, non fermentum ipsum fermentum. Etiam consequat luctus lorem et molestie. Duis dictum id risus ac bibendum. Ut convallis rutrum lacinia. Aenean vitae orci turpis. Nullam finibus sed quam sed ultrices. Vivamus ullamcorper odio est, id consequat erat pretium ac. Morbi ipsum erat, pellentesque quis quam nec, vehicula aliquam risus. Cras dui risus, gravida nec turpis eget, pretium pharetra velit. Maecenas consectetur efficitur porta. Phasellus in magna non ipsum molestie rhoncus. Sed nisi ligula, dapibus eu nulla a, consequat consectetur dolor. In faucibus volutpat augue, vitae commodo neque molestie sagittis. Proin eget elit ultrices, aliquet massa ut, luctus justo. Mauris nunc metus, convallis vitae mattis nec, bibendum eu mauris. Sed feugiat finibus placerat. Nullam id ligula ornare, rutrum augue sed, ornare nulla. In mollis cursus nisl, in facilisis justo interdum eget. Donec iaculis tincidunt ante a rutrum. Nullam maximus hendrerit metus, a accumsan elit luctus ut. Mauris iaculis eget sem feugiat dapibus. Nam imperdiet neque nec dui tempus, quis eleifend nulla rutrum. Sed ultrices, lectus vel fringilla accumsan, risus sapien ornare mi, vitae rutrum lorem leo eget purus. Vivamus efficitur, ante sed pulvinar iaculis, enim augue interdum felis, eu tincidunt dui eros at neque. Nunc eu ex vitae ante convallis blandit. Quisque euismod rutrum tortor ac fermentum. Nunc magna nulla, tincidunt nec mauris a, tempus aliquet nisl. In dolor turpis, tristique sed nisi id, gravida posuere odio. Quisque suscipit odio massa, sed consectetur metus mattis non. </div>
    <div className="col"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ante non eros vestibulum tincidunt. Sed elit sapien, ultrices fringilla risus vel, condimentum aliquet enim. Etiam vestibulum ipsum ac nisl fermentum, vitae commodo lorem congue. Pellentesque pulvinar massa sed orci aliquam, non fermentum ipsum fermentum. Etiam consequat luctus lorem et molestie. Duis dictum id risus ac bibendum. Ut convallis rutrum lacinia. Aenean vitae orci turpis. Nullam finibus sed quam sed ultrices. Vivamus ullamcorper odio est, id consequat erat pretium ac. Morbi ipsum erat, pellentesque quis quam nec, vehicula aliquam risus. Cras dui risus, gravida nec turpis eget, pretium pharetra velit. Maecenas consectetur efficitur porta. Phasellus in magna non ipsum molestie rhoncus. Sed nisi ligula, dapibus eu nulla a, consequat consectetur dolor. In faucibus volutpat augue, vitae commodo neque molestie sagittis. Proin eget elit ultrices, aliquet massa ut, luctus justo. Mauris nunc metus, convallis vitae mattis nec, bibendum eu mauris. Sed feugiat finibus placerat. Nullam id ligula ornare, rutrum augue sed, ornare nulla. In mollis cursus nisl, in facilisis justo interdum eget. Donec iaculis tincidunt ante a rutrum. Nullam maximus hendrerit metus, a accumsan elit luctus ut. Mauris iaculis eget sem feugiat dapibus. Nam imperdiet neque nec dui tempus, quis eleifend nulla rutrum. Sed ultrices, lectus vel fringilla accumsan, risus sapien ornare mi, vitae rutrum lorem leo eget purus. Vivamus efficitur, ante sed pulvinar iaculis, enim augue interdum felis, eu tincidunt dui eros at neque. Nunc eu ex vitae ante convallis blandit. Quisque euismod rutrum tortor ac fermentum. Nunc magna nulla, tincidunt nec mauris a, tempus aliquet nisl. In dolor turpis, tristique sed nisi id, gravida posuere odio. Quisque suscipit odio massa, sed consectetur metus mattis non. </div>
  </div>
  <div className="row">
    <div className="col-lg-12">
      <h1>Sample Text</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ante non eros vestibulum tincidunt. Sed elit sapien, ultrices fringilla risus vel, condimentum aliquet enim. Etiam vestibulum ipsum ac nisl fermentum, vitae commodo lorem congue. Pellentesque pulvinar massa sed orci aliquam, non fermentum ipsum fermentum. Etiam consequat luctus lorem et molestie. Duis dictum id risus ac bibendum. Ut convallis rutrum lacinia. Aenean vitae orci turpis. Nullam finibus sed quam sed ultrices. Vivamus ullamcorper odio est, id consequat erat pretium ac. Morbi ipsum erat, pellentesque quis quam nec, vehicula aliquam risus. Cras dui risus, gravida nec turpis eget, pretium pharetra velit. Maecenas consectetur efficitur porta. Phasellus in magna non ipsum molestie rhoncus. Sed nisi ligula, dapibus eu nulla a, consequat consectetur dolor. In faucibus volutpat augue, vitae commodo neque molestie sagittis. Proin eget elit ultrices, aliquet massa ut, luctus justo. Mauris nunc metus, convallis vitae mattis nec, bibendum eu mauris. Sed feugiat finibus placerat. Nullam id ligula ornare, rutrum augue sed, ornare nulla. In mollis cursus nisl, in facilisis justo interdum eget. Donec iaculis tincidunt ante a rutrum. Nullam maximus hendrerit metus, a accumsan elit luctus ut. Mauris iaculis eget sem feugiat dapibus. Nam imperdiet neque nec dui tempus, quis eleifend nulla rutrum. Sed ultrices, lectus vel fringilla accumsan, risus sapien ornare mi, vitae rutrum lorem leo eget purus. Vivamus efficitur, ante sed pulvinar iaculis, enim augue interdum felis, eu tincidunt dui eros at neque. Nunc eu ex vitae ante convallis blandit. Quisque euismod rutrum tortor ac fermentum. Nunc magna nulla, tincidunt nec mauris a, tempus aliquet nisl. In dolor turpis, tristique sed nisi id, gravida posuere odio. Quisque suscipit odio massa, sed consectetur metus mattis non. Nunc lacinia id urna nec molestie. Duis elit velit, dictum a urna sed, mattis vestibulum enim. Mauris fringilla laoreet nisi, a interdum libero porta a. Cras aliquet, justo vitae luctus semper, velit sem elementum est, sed suscipit dolor erat nec ipsum. Nam ipsum lectus, egestas vel condimentum et, tincidunt sed nunc. Ut at laoreet arcu. Donec a interdum velit, et consequat libero. Praesent fermentum volutpat ante non ornare. Fusce consectetur est in convallis pretium. Donec auctor euismod cursus. Curabitur vitae rutrum libero. Curabitur in nulla eu arcu elementum tincidunt. Donec rhoncus dui ante, quis pharetra sem vestibulum vitae. Nunc non odio a odio ultricies finibus vitae ac justo. Phasellus porta fringilla nisl, a dictum neque condimentum nec. Etiam tempus cursus tellus eget pharetra. Quisque sed tortor vitae dui tincidunt sodales quis ac velit. Aliquam eu nunc non nibh malesuada luctus convallis vel magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras lacinia nulla massa, ut scelerisque diam aliquet placerat. Curabitur vehicula venenatis nisl, nec sollicitudin mi sollicitudin eget. Cras vitae risus enim. Sed laoreet erat vel enim porta, a accumsan enim rutrum. Donec vitae suscipit ipsum, a ultrices sem. Mauris justo enim, ornare quis tellus vitae, accumsan feugiat ipsum. Integer mauris est, auctor vitae metus vitae, facilisis faucibus nulla. Fusce et ornare orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris condimentum pharetra varius. In feugiat nisl id purus aliquet, vitae bibendum dolor rhoncus. Sed faucibus rhoncus nulla aliquet luctus. Ut ornare risus quis mi porttitor, id blandit sapien faucibus. Mauris porttitor, mi vitae auctor ornare, eros sem sollicitudin mauris, sed viverra libero diam ut leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ante non eros vestibulum tincidunt. Sed elit sapien, ultrices fringilla risus vel, condimentum aliquet enim. Etiam vestibulum ipsum ac nisl fermentum, vitae commodo lorem congue. Pellentesque pulvinar massa sed orci aliquam, non fermentum ipsum fermentum. Etiam consequat luctus lorem et molestie. Duis dictum id risus ac bibendum. Ut convallis rutrum lacinia. Aenean vitae orci turpis. Nullam finibus sed quam sed ultrices. Vivamus ullamcorper odio est, id consequat erat pretium ac. Morbi ipsum erat, pellentesque quis quam nec, vehicula aliquam risus. Cras dui risus, gravida nec turpis eget, pretium pharetra velit. Maecenas consectetur efficitur porta. Phasellus in magna non ipsum molestie rhoncus. Sed nisi ligula, dapibus eu nulla a, consequat consectetur dolor. In faucibus volutpat augue, vitae commodo neque molestie sagittis. Proin eget elit ultrices, aliquet massa ut, luctus justo. Mauris nunc metus, convallis vitae mattis nec, bibendum eu mauris. Sed feugiat finibus placerat. Nullam id ligula ornare, rutrum augue sed, ornare nulla. In mollis cursus nisl, in facilisis justo interdum eget. Donec iaculis tincidunt ante a rutrum. Nullam maximus hendrerit metus, a accumsan elit luctus ut. Mauris iaculis eget sem feugiat dapibus. Nam imperdiet neque nec dui tempus, quis eleifend nulla rutrum. Sed ultrices, lectus vel fringilla accumsan, risus sapien ornare mi, vitae rutrum lorem leo eget purus. Vivamus efficitur, ante sed pulvinar iaculis, enim augue interdum felis, eu tincidunt dui eros at neque. Nunc eu ex vitae ante convallis blandit. Quisque euismod rutrum tortor ac fermentum. Nunc magna nulla, tincidunt nec mauris a, tempus aliquet nisl. In dolor turpis, tristique sed nisi id, gravida posuere odio. Quisque suscipit odio massa, sed consectetur metus mattis non. Nunc lacinia id urna nec molestie. Duis elit velit, dictum a urna sed, mattis vestibulum enim. Mauris fringilla laoreet nisi, a interdum libero porta a. Cras aliquet, justo vitae luctus semper, velit sem elementum est, sed suscipit dolor erat nec ipsum. Nam ipsum lectus, egestas vel condimentum et, tincidunt sed nunc. Ut at laoreet arcu. Donec a interdum velit, et consequat libero. Praesent fermentum volutpat ante non ornare. Fusce consectetur est in convallis pretium. Donec auctor euismod cursus. Curabitur vitae rutrum libero. Curabitur in nulla eu arcu elementum tincidunt. Donec rhoncus dui ante, quis pharetra sem vestibulum vitae. Nunc non odio a odio ultricies finibus vitae ac justo. Phasellus porta fringilla nisl, a dictum neque condimentum nec. Etiam tempus cursus tellus eget pharetra. Quisque sed tortor vitae dui tincidunt sodales quis ac velit. Aliquam eu nunc non nibh malesuada luctus convallis vel magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras lacinia nulla massa, ut scelerisque diam aliquet placerat. Curabitur vehicula venenatis nisl, nec sollicitudin mi sollicitudin eget. Cras vitae risus enim. Sed laoreet erat vel enim porta, a accumsan enim rutrum. Donec vitae suscipit ipsum, a ultrices sem. Mauris justo enim, ornare quis tellus vitae, accumsan feugiat ipsum. Integer mauris est, auctor vitae metus vitae, facilisis faucibus nulla. Fusce et ornare orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris condimentum pharetra varius. In feugiat nisl id purus aliquet, vitae bibendum dolor rhoncus. Sed faucibus rhoncus nulla aliquet luctus. Ut ornare risus quis mi porttitor, id blandit sapien faucibus. Mauris porttitor, mi vitae auctor ornare, eros sem sollicitudin mauris, sed viverra libero diam ut leo. </p>
    </div>
  </div>
  </Fragment>
  )
}


const App = () => {

  const cookies = new Cookies();
  const [token,setToken] = useState("")

  

    

    const [state,setState] = useState ({
      isLoggedin: false,
      user: {}    
    })

    const getToken = () => {
      setToken(cookies.get("token"))
    }

    
    
    

    const checkLoginStatus = () => {

      getToken()

      const url = `/api/v1/loggedin/${token}`

      console.log("Token:", token)
  
      axios
      .get(url)
      .then((response) => {
        console.log("Checking Login Status", response);
       if (response.data.isLoggedin && state.isLoggedin === false)
       {
         setState ({
          isLoggedin: true,
          user: response.data.user
        })
       }
       else if (!response.data.isLoggedin && state.isLoggedin)
       {
        setState ({
          isLoggedin: false,
          user: {}
        })
       }
        })
      .catch((response) => console.log("Failed response", response));
      
    }

  const handleSuccessfulAuth = (data) =>
  {
    //Todo update parent component
    handleLogin(data.user)
    console.log("Data Received", data)
    console.log("Handle Successful Auth")  
    navigate("/")
  
  }

  const handleLogoutClick = () =>
  {

    const url = "/logout"
    axios
    .delete(url,{ withCredentials: true })
    .then((response) => {
      console.log("Successful logout", response)
      handleLogout()
      })
    .catch((response) => console.log("Error Failed Logout response", response));
    
  }

  const handleLogin = (data) =>
  {
    console.log("Handle Login")
    setState ({
      isLoggedin: true,
      user: data
    })

    if(token != state.user.authentication_token)
    {
      cookies.set('token',state.user.authentication_token, {path: '/'})
    }

  }

  const handleLogout = () =>
  {
    console.log("Handle Login")
    setState ({
      isLoggedin: false,
      user: {}  
    })

  }

  useEffect(() => {
   
    checkLoginStatus()
  }, []);




    return (
      <Router>
       
        <Header/>
        <LeftNav/>
        <Routes>
          <Route path="/" element={<Source/>}/>
          <Route path="/signup" element={<Signup handleSuccessfulAuth={handleSuccessfulAuth}/>}/>
          <Route path="/login" element={<Login handleSuccessfulAuth={handleSuccessfulAuth}/>}/>        
          <Route path="/second" element={<Second/>}/>
          <Route path="/urls" element={<Urlform/>}/>
          <Route path="/source" element={<Source user={state.user} isLoggedin={state.isLoggedin} />}/>
          <Route path="/source/:id" element={<Middle user={state.user} isLoggedin={state.isLoggedin} />}/>
          <Route path="/teams/nba/:id" element={<Team user={state.user} isLoggedin={state.isLoggedin} />}/>
          <Route path="/teams/nfl/:id" element={<Team user={state.user} isLoggedin={state.isLoggedin}/>}/>
          <Route path="/teams/nhl/:id" element={<Team user={state.user} isLoggedin={state.isLoggedin}/>}/>
          <Route path="/teams/mlb/:id" element={<Team user={state.user} isLoggedin={state.isLoggedin}/>}/>
          <Route path="/source/:id/:lumpid" element={<Source/>}/>

        </Routes>
        
     </Router>
     

    )

}

export default App
