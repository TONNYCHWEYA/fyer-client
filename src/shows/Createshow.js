
import React, {useState}  from "react";
import {useNavigate} from "react-router-dom"
function Createshow(){
  const navigate = useNavigate()
  const [dataform, setDataForm] = useState(
    {
      artist_id: 0,
      venue_id: 0,
      start_time: ""
    })

function handleSubmit(e){
  e.preventDefault()
  const newShow ={
    artist_id: dataform.artist_id,
    venue_id: dataform.venue_id,
    start_time: dataform.start_time
  }

  fetch("http://localhost:9292/shows", {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newShow)
  })
  .then((r) => r.json())
  .then((show) =>{ 
    console.log(show)
    navigate(`/shows`)})
}



  return(
    <div>
     <h1>List a new show</h1>
     <form onSubmit={handleSubmit}>
     <label>Artist ID<br />
     <small>ID can be found on the Artist's Page</small><br />
    
    <input type="number" id="artist_id"  value={dataform.artist_id} onChange={(e) => setDataForm({...dataform,artist_id: e.target.value})}/>
     </label> <br /><br />
    
    
      <label>Venue ID<br />
    
      <small>ID can be found on the Venue's Page</small><br />
    
      <input type="number" id="venue_id"  value={dataform.venue_id} onChange={(e) => setDataForm({...dataform,venue_id: e.target.value})}/>
      </label><br /><br />
    
    
      
      <label>Start Time<br />
    
      <input type="text" placeholder="yyyy-MM-ddThh:mm" id="start_time"  value={dataform.start_time} onChange={(e) => setDataForm({...dataform,name: e.target.start_time})}/><br />
    
      </label><br /><br />
    
    
     
      <input type="submit" value="Create Venue"/>
     </form>
    </div>
  )
}
export default Createshow
