import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import './WeatherApp.css'
import { useState } from "react"
export default function WeatherApp() {

  const[weatherInfo, setWeatherInfo] = useState({
    city : "Delhi",
        Feels_like: 29.98,
        Humidity: 31,
        Pressure: 998,
        Temperature: 31.14,
        Temperature_max: 31.14,
        Temperature_min: 31.14,
  })

  let updateInfo = (newInfo) =>{
  setWeatherInfo(newInfo); 
  }

  return (
    <>
    <div className="wapp">
        <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info = {weatherInfo}/>
    </div>
    </>
  )
}
