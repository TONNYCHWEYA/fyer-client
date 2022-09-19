import React,  {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/footer/Footer";

function Artistpage(){
	const[artists, setArtist]= useState([])

	useEffect(() =>{
		fetch('http://localhost:9292/artists')
		.then((r) => r.json())
		.then((data) => {
		
		 setArtist(data)})
		
	},[])


  return(
		<div>
			 <h3> Available artist </h3>
    <ul>
	
	{artists.map((artist) =>
			(
			<li key={artist.id}><Link to={'/artists/' +artist.id}>
				
				<div >
				<i className="fa fa-users"></i>
					<h5>{artist.name}</h5>
				</div>
			</Link>  
			</li>))}
		

</ul>
<Footer />
</div>
  )
}
export default Artistpage