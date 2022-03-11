import './WeatherListContainer.scss'
import WeatherItemContainer from '../weather-item-container/WeatherItemContainer'
import { dayWeatherDetails } from '../../redux/weatherDetails/weatherDetails-selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';


const WeatherListContainer = ({dayWeatherDetails}) => {
  return (
    <div className = "weather-list-container">
            {
                dayWeatherDetails?.map((item) => (
                    <WeatherItemContainer hourWeather={item}/>
                ))
            }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  dayWeatherDetails : dayWeatherDetails,
})

export default connect(mapStateToProps)(WeatherListContainer)
