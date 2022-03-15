import { combineReducers } from "redux";
import { ipDetailsReducer } from "./ipDetails/ipDetails-reducer";
import { weatherReducer } from "./weatherDetails/weatherDetails-reducer";

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['weatherDetails']
}

const rootReducer = combineReducers({
    currentLocationCountry : ipDetailsReducer,
    weatherDetails : weatherReducer
})


export default persistReducer(persistConfig,rootReducer)