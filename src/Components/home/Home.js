import React from "react";

import Footer from "../footer/Footer";
import { NavLink } from "react-router-dom";



export default function Home(){
  return(
  <div>
    
    <div>
    <h1>Fyyur 🔥</h1>
    <span>
     <NavLink to="/venues"><button>Find a venue</button></NavLink>
      <NavLink to="/venues/new"><button>Post a venue</button></NavLink>
    </span> <br />
    <span>
    <NavLink to="/artists"><button>Find an artist</button></NavLink> 
    <NavLink to="/artists/new"><button>Post an artist</button></NavLink>
    </span>
    <p>Publicize about your show for free.</p>
    <NavLink to="/shows/new"><button>Post a show</button></NavLink>
    </div>
    <div>
      <img src="" alt=""/>
    </div>
<Footer />
  </div>
  )
}
