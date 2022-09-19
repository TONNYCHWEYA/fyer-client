import React from "react";
import {NavLink} from "react-router-dom"

export default function Navbar(){
  return(
    <div>
      <NavLink style={{padding: '50px'}} to="/">🔥</NavLink>
      <NavLink style={{padding: '50px'}} to="/venues">Venues</NavLink>
      <NavLink style={{padding: '50px'}} to="/artists">Artist</NavLink>
      <NavLink style={{padding: '50px'}} to="/shows">Shows</NavLink>
    </div>
  )
}