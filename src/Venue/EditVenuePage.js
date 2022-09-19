import React, {useState, useEffect}  from "react";
import {useNavigate, useParams} from "react-router-dom"
function EditVenuePage(){
  const params = useParams()

 
  const navigate = useNavigate()
  const [dataform, setDataForm] = useState(
    {
      name: "",
      city:  "",
      state: "",
      address: "",
       phone: "",
       genres: [],
       facebook_link:  "",
      image_link:  "",
      website_link: "",
      looking_for_venues: false,
      seeking_description: ""
    } 
  )

 useEffect(() =>{
 	fetch(`http://localhost:9292/venues/${params.id}`)
 	.then((r) => r.json())
 	.then((data) => {
		
		setDataForm(data)})
 },[params.id])


  

  function handleSubmit(e){
    e.preventDefault();
    const newVenue ={
      name: dataform.name,
      city:  dataform.city,
      state: dataform.state,
      address: dataform.address,
       phone: dataform.phone,
       genres: dataform.genres,
       facebook_link:  dataform.facebook_link,
      image_link:  dataform.image_link,
      website_link: dataform.website_link,
      looking_for_venues: dataform.looking_for_venues,
      seeking_description: dataform.seeking_description
    }
    console.log(newVenue)

    fetch(`http://localhost:9292/venues/${params.id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVenue)
    })
    .then((r) => r.json())
    .then((venue) =>{ 
      console.log(venue)
      navigate(`/venues/${venue.id}`)})
  }

  function handleChange(e){
    let value = Array.from(e.target.selectedOptions, option => option.value);
     setDataForm({...dataform, genres: value});
  }
  

  return(
    <div>
      <form onSubmit={handleSubmit}>
        
      
        
        <label>Name
        <input type="text" id="Name" value={dataform.name} onChange={(e) => setDataForm({...dataform,name: e.target.value})}/>
        </label>
    
    
        <label>City
        <input type="text" value={dataform.state} onChange={(e) => setDataForm({...dataform, state: e.target.value})}/>
       
        <select name="city" id="city" value={dataform.city} onChange={(e) => setDataForm({...dataform,city: e.target.value})}>
          <option value="Nairobi">Nairobi</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Nakuru">Nakuru</option>
          <option value="Mombasa">Mombasa</option>
        </select>
        </label>

        <label>Address
    <input type="text" id="address" value={dataform.address} onChange={(e) => setDataForm({...dataform, address: e.target.value})}/>
    </label>
    
        <label>Phone
    <input type="tell" id="phone" value={dataform.phone} onChange={(e) => setDataForm({...dataform, phone: e.target.value})}/>
    </label>

    <label >Genres
    <small>Ctrl+Click to select multiple</small>
    <select name="genres" id="genres" value={dataform.genres} onChange={handleChange} multiple>
     <option value="Alternative">Alternative</option>
     <option value="Blues">Blues</option>
     <option value="Classical">Classical</option>
     <option value="Country">Country</option>
     <option value="Electronic">Electronic</option>
     <option value="Folk">Folk</option>
     <option value="Funk">Funk</option>
     <option value="Hip-Hop">Hip-Hop</option>
     <option value="Heavy Metal">Heavy Metal</option>
     <option value="Instrumental">Instrumental</option>
     <option value="Jazz">Jazz</option>
    </select>
    </label>
    <label>Facebook Link
    <input type="url" id="facebook_link" value={dataform.facebook_link} onChange={(e) => setDataForm({...dataform, facebook_link: e.target.value})}/>
    </label>

    <label>Image Link
    <input type="url" id="image_link" value={dataform.image_link} onChange={(e) => setDataForm({...dataform, image_link: e.target.value})}/>
    </label>
    <label>Website Link
    <input type="url" id="website_link" value={dataform.website_link} onChange={(e) => setDataForm({...dataform, website_link: e.target.value})}/>
    </label>

    <label for="seeking_talent">Looking for Talent
    <input type="checkbox" id="seeking_talent" value={dataform.looking_for_venues} onChange={(e) => setDataForm({...dataform,looking_for_venues: e.target.value})}/>
    </label>

    <label for="seeking_description" >Seeking Description
    <input type="text" id="seeking_description" value={dataform.seeking_description} onChange={(e) => setDataForm({...dataform,seeking_description: e.target.value})}/>
    </label>

    <input type="submit" value="Create Venue"></input>
     </form>
    </div>
  )
}

export default EditVenuePage