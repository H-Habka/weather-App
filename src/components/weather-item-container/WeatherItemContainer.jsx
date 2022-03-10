import './WeatherItemContainer.scss'
import WeatherDetails from '../wether-details/WeatherDetails'
import { useState } from 'react'

const WeatherItemContainer = ({ hourWeather }) => {
    const [detailsState, setDetailsState] = useState(false)
    return (
        <>
            <div className='weather-item-container' onClick={() => setDetailsState(!detailsState)}>
                <div className="item-icon" style={{
                    backgroundImage: `url(${hourWeather.condition.icon})`
                }}></div>
                <div className="time">
                    Time: {hourWeather.time.slice(-5,)}
                </div>
                <div className="weather-condition-text">
                    {hourWeather.condition.text}
                </div>
            </div>
            {
                detailsState ? (
                    <div className="popup-container" onClick={
                        (e) => {
                            if (e.target.className == 'popup-container')
                                setDetailsState(false)
                        }
                    }>
                        <div className="hour-details-container">
                            <div className="item-icon" style={{
                                backgroundImage: `url(${hourWeather.condition.icon})`
                            }}></div>
                            <div className="time">
                                Time: {hourWeather.time.slice(-5,)}
                            </div>
                            <div className="weather-condition-text">
                                {hourWeather.condition.text}
                            </div>
                            <div className="details-container">
                                <WeatherDetails {...hourWeather} />
                            </div>
                        </div>
                    </div>
                ) : ('')
            }

        </>
    )
}

export default WeatherItemContainer