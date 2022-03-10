import './WeatherListContainer.scss'
import WeatherItemContainer from '../weather-item-container/WeatherItemContainer'




const WeatherListContainer = ({dayWeather}) => {
  return (
    <div className = "weather-list-container">
            {
                dayWeather.map((item) => (
                    <WeatherItemContainer hourWeather={item}/>
                ))
            }
    </div>
  )
}

export default WeatherListContainer