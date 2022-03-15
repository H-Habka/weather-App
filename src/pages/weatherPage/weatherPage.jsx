import React from 'react'
import './weatherPage.scss'
import CurrentWeatherInfo from '../../components/current-weather-info/CurrentWeatherInfo';
import WeatherListContainer from '../../components/weather-list-container/WeatherListContainer';
import SettingIconWithPopup from '../../components/settingIcon/settingIcon';
import Spinner from '../../components/spinner/Spinner'
import { connect } from 'react-redux';

const WeatherPage = ({dataIsLoading}) => {

  return (
    <>
      <div className="Weather-page-container">
        {
          dataIsLoading ? (
            <Spinner />
          ) : (
            <>
              <SettingIconWithPopup />
              <CurrentWeatherInfo />
              <WeatherListContainer />
            </>
          )
        }

      </div>
    </>
  )
}

const mapStateToProps = state => ({
  // dataIsLoading:
  dataIsLoading: state.weatherDetails.isFetchingWeatherDetailsStatus |  state.currentLocationCountry.isFetchingDetailsStatus

})
export default connect(mapStateToProps)(WeatherPage)


