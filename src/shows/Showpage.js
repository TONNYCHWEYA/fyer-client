import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/footer/Footer";
function Showpage(){
const[shows, setShows] = useState([])

useEffect(() =>{
  fetch('http://localhost:9292/shows')
  .then((r) => r.json())
  .then((data) => {
  
   setShows(data)})
  
},[])

  console.log(shows)
  return(
    <div>
     <h3>Shows</h3>
     {shows.map((show)=>
     (
      <div>
            <img src={show.artist_image_link} alt="Artist" />
            
            <h5><Link to="/artist/:id">{show.artist_name} </Link></h5>
            <p>playing at</p>
            <h5><Link to="/venues/:id">{show.venue_name }</Link></h5>
        </div>
     ))}
        
        <Footer />
    </div>
    

  )
}
export default Showpage