import { combineReducers } from "redux";
import { ipDetailsReducer } from "./ipDetails/ipDetails-reducer";
import { weatherReducer } from "./weatherDetails/weatherDetails-reducer";


export const  rootReducer = combineReducers({
    ipDetails : ipDetailsReducer,
    weatherDetails : weatherReducer
})