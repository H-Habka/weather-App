import './WeatherDetails.scss'



const WeatherDetails = ({humidity,pressure_mb,temp_c,wind_kph}) => {
    return (
        <div className='weather-details'>
            <span className="detail">Wind: {wind_kph} kph</span>
            <span className="detail">Pr: {pressure_mb} mb</span>
            <span className="detail">Hum: {humidity}</span>
            <span className="detail">{temp_c} &#176;C</span>
        </div>
    )
}

export default WeatherDetails 