import './CurrentWeatherInfo.scss'
import WeatherDetails from '../wether-details/WeatherDetails'
import { CurrentWeatherDetails } from '../../redux/weatherDetails/weatherDetails-selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const CurrentWeatherInfo = ({ CurrentWeatherDetails }) => {

  console.log('test test  : ',CurrentWeatherDetails)
  return (
    <div className="current-weather-section">
      <div className="current-weather-info">
        <div className="weather-icon-and-disc">
          <div className="weather-icon" style={{
              backgroundImage: `url(${CurrentWeatherDetails?.condition?.icon})`
          }}/>
          <div className="disc">{CurrentWeatherDetails?.condition?.text}</div>
        </div>
        <WeatherDetails {...CurrentWeatherDetails} />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    CurrentWeatherDetails: CurrentWeatherDetails,
})

export default connect(mapStateToProps)(CurrentWeatherInfo)