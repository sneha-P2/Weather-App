import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FlareIcon from '@mui/icons-material/Flare';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {

    let IMG_URL = "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg"

    return (
        <div className="infoBox">
           <h3>Weather Info</h3>
             <Card sx={{ width: 350 }} className="cardWidth">
      <CardMedia
        sx={{ height: 140 }} image = {IMG_URL} title="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          <span style={{marginLeft:"10px", color:"blue"}}>{info.Humidity > 80? <ThunderstormIcon />: info.Temperature > 25? <FlareIcon />: <AcUnitIcon/>}</span>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.dark', lineHeight:"10px" }}>
      <b><p>Temperature: {info.Temperature}°C</p>
      <p>Temperature_min: {info.Temperature_min}°C</p>
      <p>Temperature_max: {info.Temperature_max}°C</p>
      <p>Pressure: {info.Pressure} hPa</p>
      <p>Humidity: {info.Humidity}%</p>
      <p>Feels_like: {info.Feels_like}°C</p></b>
        </Typography>
      </CardContent>
    </Card>

        </div>
    )
}
