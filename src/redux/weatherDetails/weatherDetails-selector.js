import {createSelector} from 'reselect'

const weatherDetails = (state) => state.weatherDetails

export const CurrentWeatherDetails = createSelector(
    [weatherDetails],
    (weatherDetails) =>  weatherDetails ? (weatherDetails.weatherDetails.current) : ('')
)

export const dayWeatherDetails = createSelector(
    [weatherDetails],
    (weatherDetails)=>weatherDetails ?  (weatherDetails.weatherDetails.forecast) : ('')
)