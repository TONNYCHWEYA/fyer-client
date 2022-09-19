import React from "react";

function Artistsearchresults(){
  return(
    <div>
<h3>Number of search results for " search_term ":  results.count </h3>
<ul class>
	 for artist in results.data 
	<li>
		{/*replace a with link*/}
		<a href="/artistdetails/ artist.id">
			<i className="fas fa-users"></i>
			<div >
				<h5>artist.name</h5>
			</div>
		</a>
	</li>
	
</ul>
    </div>
  )
}
export default Artistsearchresults