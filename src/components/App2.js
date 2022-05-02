import React, { useState, useEffect, Fragment } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import $ from 'jquery'
import "./App.css"
import Collapsible from 'react-collapsible';

const OpenNav = () => {
  
  if(document.getElementById("mySidenav").style.width == "0px") {
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.marginRight = "250px";
	} else {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginRight = "0";
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

const Accordian = () => {
  return (
    <Collapsible trigger="Start here">
    <p>
      This is the collapsible content. It can be any element or React
      component you like.
    </p>
    <p>
      It can even be another Collapsible component. Check out the next
      section!
    </p>
  </Collapsible>
)  
}

const Header = () => {
  return (
   
    <header className="header body-pd" id="header">
		<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button> <a className="navbar-brand" href="#">Company</a>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item header_toggle" style={{marginTop: "3px"}}><i className='bx bx-menu' id="header-toggle"></i> </li>
						<li className="nav-item"> <a className="nav-link active" aria-current="page" href="http://chunkysports:3000/">Home</a> </li>
						<li className="nav-item"> <a className="nav-link" href="#">About</a> </li>
						<li className="nav-item"> <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a> </li>
					</ul>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form> <a className="nav-link" href="#"><span style={{fontWeight: "bold",fontSize: "18px"}} onClick={OpenNav}>&#9776; </span></a> </div>
			</div>
		</nav>
	</header>
  )
}

const LeftNav = () => {
  return (
    <Fragment>
    <div className="l-navbar show" id="nav-bar" style={{marginTop: "65px"}}>
		<nav className="nav">
			<div>
				<a href="#" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Company</span> </a>
				<div className="nav_list">
					<a href="#" className="nav_link active"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Dashboard</span> </a>
					<a href="#" className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Users</span> </a>
					<a href="#" className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_name">Messages</span> </a>
					<a href="#" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Bookmark</span> </a>
					<a href="#" className="nav_link"> <i className='bx bx-folder nav_icon'></i> <span className="nav_name">Files</span> </a>
					<a href="#" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Stats</span> </a>
				</div>
			</div>
		</nav>
	</div>
	<div id="mySidenav" className="sidenav-1"> <a href="#">About</a> <a href="#">Services</a> <a href="#">Clients</a> <a href="#">Contact</a> </div>
  </Fragment>

  )
}

const Main = () => {
  return (
    
    <div className="height-100" id="main">
      <div style={{marginTop: "65px"}}>&nbsp;</div>
      <div className="container">
       <Sample/>
      </div>
    </div>
    


  )
  
}

const App = () => {
    return (
      <div id="body-pd" className="body-pd">
        <Header/>
        <LeftNav/>
        <Main/>
      </div>

    )

}

export default App
