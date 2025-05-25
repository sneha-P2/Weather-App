import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import './WeatherApp.css'
import { useState } from "react"
export default function WeatherApp() {

  const[weatherInfo, setWeatherInfo] = useState({})

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
