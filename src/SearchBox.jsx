import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false)

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "71e5249661a8750cbe8c84d9940e2db2";

  let getWheatherInfo = async (city) => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let finalresponse = await response.json()
      console.log(finalresponse);
      let result = {
        city: city,
        Temperature: finalresponse.main.temp,
        Temperature_min: finalresponse.main.temp_min,
        Temperature_max: finalresponse.main.temp_max,
        Humidity: finalresponse.main.humidity,
        Feels_like: finalresponse.main.feels_like,
        Pressure: finalresponse.main.pressure,
      }
      console.log(result)
      return result;
    } catch (err) {
      throw err;
    }

    };

  let handleChange = (e) => {
    setCity(e.target.value);
    setError(false)
  }

  let handleSubmit = async (evt) => {

    try{
 evt.preventDefault()
    console.log(city);
    setCity("")
    let newInfo = await getWheatherInfo(city)
    updateInfo(newInfo);
    }catch(err){
      setError(true)
    }
   
  }

  return (
    <div className='searchbox'>
      <h2>Search here for city!</h2>
      <form onSubmit={handleSubmit}>
        <TextField required id="city" label="City" placeholder="City Name" value={city} onChange={handleChange} variant="standard" />
        <br></br><br></br>
        <Button variant="contained" type='submit'>Search</Button>
        <span>{error && <p style={{color:"darkred", fontSize:"20px", fontWeight:"bold"}} className='srcp'>No such city exits in API!! </p>}</span>
      </form>
    </div>
  )
}
