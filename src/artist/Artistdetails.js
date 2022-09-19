import React, {useState, useEffect} from "react";
 import { Link,useParams} from "react-router-dom";
import Artistpage from "../artist/Artistpage";
import Footer from "../Components/footer/Footer";

function Artistdetails(){
	const [artistData, setArtistData] = useState({})
	const  params = useParams()
	useEffect(() =>{
		fetch(`http://localhost:9292/artist/${params.id}`)
		.then((r) => r.json())
		.then((data) => {
		 console.log(data)
		 setArtistData(data)})
	},[params.id])
 



  return(
    <div>
     <div>
	<div>
	<h1 > {artistData.name}</h1>
		<p >ID:{artistData.id}</p>
		{/* <div>{artistData.genres.map((genre) => 	<span key={genre}>{genre}</span> )}
		
		</div> */}
		<p><i className="fa fa-globe"></i>{` ${artistData.city}  ${artistData.state}`}</p>
	
		<p><i className="fa fa-phone"></i> {artistData.phone}</p>
		<p><i className="fa fa-link"></i>   <a href= {artistData.website_link} target="_blank"> {artistData.website_link}</a></p>
		<p><i className="fa fa-facebook-f"></i><a href={artistData.facebook_link} target="_blank">{artistData.facebook_link}  </a></p>
		 {artistData.looking_for_venues ? (<div >
			<p>Currently seeking talent</p>
			<div><i className="fa fa-quote-left"></i>{artistData.seeeking_description}<i className="fa fa-quote-right"></i></div>
		</div>):(<p>
			<i className="fa fa-moon"></i> Not currently seeking talent
		</p>)}
		


	</div>
	<div>
		<img src={artistData.image_link} alt="Venue" style={{width: '400px', heigth: '400px'}} />
	</div>
</div>
  
{/* <section>
	<h2> artist.upcoming_shows_count  Upcoming if artist.upcoming_shows_count == 1 Show else Shows endif </h2>
	<div>
		for show in artist.upcoming_shows 
		<div >
			<div >
				<img src=" show.venue_image_link " alt="Show Venue" /> */}
			
				{/* <h5><a href="/venuesdetails/venueid">show.venue_name </a></h5>
				<h6> show.start_time|datetime('full') </h6>
			</div>
		</div>
	
	 </div> 
</section>
<section>
	<h2> artist.past_shows_count  Past  if artist.past_shows_count == 1 Show else Showsendif </h2>
	<div>
		for show in artist.past_shows 
		<div>
			<div>
				<img src="show.venue_image_link " alt="Show Venue " />
			
				<h5><a href="/venuesdetails/ show.venue_id "> show.venue_name </a></h5>
				<h6> show.start_time|datetime('full') </h6>
			</div>
		</div>
		
	</div>
</section> */}

<a href="/artists/{{ artist.id }}/edit"><button >Edit</button></a>

    </div>
  )
}
export default Artistdetails