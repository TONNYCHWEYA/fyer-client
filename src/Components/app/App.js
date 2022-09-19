import React from "react";

import Navbar from "../navbar/Navbar";
import { Routes, Route } from "react-router-dom";
 
import 'font-awesome/css/font-awesome.min.css';

import Artistpage from "../../artist/Artistpage";
import Showpage from "../../shows/Showpage";
import Home from "../home/Home";
import Venuedetails from "../../Venue/Venuedetails";
import Venuepages from "../../Venue/Venuepages";
import Listnewvenue from "../../Venue/Listnewvenue";
import Createnewartist from "../../artist/Createnewartist"
import Createshow from "../../shows/Createshow"
import EditVenuePage from "../../Venue/EditVenuePage";
import Artistdetails from "../../artist/Artistdetails"


function App() {
  return (
   <div>
   <Navbar />
   <Routes>
<Route exact path="/venues" element={<Venuepages/>}/>
 

  <Route  path='/venues/:id' element={<Venuedetails />}/>

  <Route exact path="/venues/new" element={<Listnewvenue />}/>

  <Route exact path="/artists" element={<Artistpage />}/>
  <Route exact path="/artists/new" element={<Createnewartist />}/>
  <Route  path='/artists/:id' element={<Artistdetails />}/>
  
  <Route exact path="/shows" element={<Showpage />}/>
  <Route exact path="/shows/new" element={<Createshow/>}/>

<Route exact path="/editvenuepage/:id" element={<EditVenuePage />}/>
  <Route exact  path="/" element={<Home />}/>
   

</Routes>
   </div>
   
  )
}

export default App;
