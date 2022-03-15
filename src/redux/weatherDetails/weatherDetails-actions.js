import { weatherDetailsTypes } from "./weatherDetails-types";
import { getWeatherData } from "../../FetchData/getWeatherData";
import { filteredWeatherDetails } from "./filteredWeatherDetails";

const weatherDetailsFetch = (country) => ({
    type: weatherDetailsTypes.WEATHER_DETAILS_START_FETCH,
    payload : country
})

const weatherDetailsSuccess = (currentDeatils) => ({
    type: weatherDetailsTypes.WEATHER_DETAILS_FETCH_SUCCESS,
    payload : currentDeatils
})

const weatherDetailsFiled = (errorMsg) => ({
    type: weatherDetailsTypes.WEATHER_DETAILS_FETCH_FILED,
    payload : errorMsg
})

export const weatherDetailsFetchInit = (country) => dispatch => {
    console.log('weather start fetch')
    dispatch(weatherDetailsFetch(country))
    getWeatherData(process.env.REACT_APP_API_KEY,country).then((weatherDetails)=>{
        dispatch(weatherDetailsSuccess(filteredWeatherDetails(weatherDetails)))
    }).catch((errorMessage)=>{
        dispatch(weatherDetailsFiled(errorMessage))
    })
}

