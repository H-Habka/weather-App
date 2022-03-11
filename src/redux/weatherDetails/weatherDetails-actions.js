import { weatherDetailsTypes } from "./weatherDetails-types";
import { getWeatherData } from "../../FetchData/getWeatherData";
const ApiWeatherKey = '4fc4c4f9b1174e5d8ba145306220903'

const weatherDetailsFetch = () => ({
    type: weatherDetailsTypes.WEATHER_DETAILS_START_FETCH
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
    dispatch(weatherDetailsFetch())
    getWeatherData(ApiWeatherKey,country).then((weatherDetails)=>{
        dispatch(weatherDetailsSuccess(weatherDetails))
    }).catch((errorMessage)=>{
        dispatch(weatherDetailsFiled(errorMessage))
    })
}