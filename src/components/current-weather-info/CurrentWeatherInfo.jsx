import './CurrentWeatherInfo.scss'
import WeatherDetails from '../wether-details/WeatherDetails'


const CurrentWeatherInfo = ({currentWeather}) => {
    return (
        <div className="current-weather-section">
            <div className="current-weather-info">
                <div className="weather-icon-and-disc">
                    <div className="weather-icon" style={{
                        backgroundImage: `url(${currentWeather?.condition?.icon})`
                    }}></div>
                    <div className="disc">{currentWeather?.condition?.text}</div>
                </div>
                <WeatherDetails {...currentWeather}/>
            </div>
        </div>
    )
}

export default CurrentWeatherInfo