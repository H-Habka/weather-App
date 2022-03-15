import { weatherDetailsTypes } from "./weatherDetails-types";

const INITIAL_STATE = {
    isFetchingWeatherDetailsStatus : false,
    weatherDetails : '',
    errorMessage : '',
    selectedCountry :''
}

export const weatherReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case weatherDetailsTypes.WEATHER_DETAILS_START_FETCH:
            return ({
                ...state,
                isFetchingWeatherDetailsStatus: true,
                selectedCountry : action.payload
            })
        case weatherDetailsTypes.WEATHER_DETAILS_FETCH_SUCCESS:
            return ({
                ...state,
                isFetchingWeatherDetailsStatus: false,
                weatherDetails : action.payload

            })
        case weatherDetailsTypes.WEATHER_DETAILS_FETCH_FILED:
            return ({
                ...state,
                isFetchingWeatherDetailsStatus: false,
                errorMessage: action.payload
            })
        default : return state
    }
}