import React from "react";
import { Link } from "react-router-dom";

function Venuesearchresults(){
  return (
    <div>
    <h3>Number of search results for " search_term ":  results.count </h3>
<ul>
	
	<li>
		<Link to="/venuedetails">
			<i class="fas fa-music"></i>
			<div>
				<h5>venue.name </h5>
			</div>
		</Link>
	</li>
	
</ul>
    </div>
  )
}
export default Venuesearchresults