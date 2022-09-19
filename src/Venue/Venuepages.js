import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/footer/Footer";



function Venuepages(){
	const[venues, setVenues]= useState([])

	useEffect(() =>{
		fetch('http://localhost:9292/venues')
		.then((r) => r.json())
		.then((data) => {
		
		 setVenues(data)})
		
	},[])

	console.log(venues)
  return (
    <div>
      

      <h3> Available venues </h3>
	<ul >
		
		
		{venues.map((venue) =>
			(
			<li key={venue.id}><Link to={'/venues/' +venue.id}>
				
				<div >
				<i className="fa fa-music"></i>
					<h5>{venue.name}</h5>
				</div>
			</Link>  
			
		</li>
		)
		
		)
	}
			 
				


			
		
			
		
	</ul>

      <Footer />
    </div>
  )
}

export default Venuepages