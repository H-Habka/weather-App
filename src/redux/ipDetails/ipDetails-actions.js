import { ipDetailsTypes } from "./ipDetails-types"; 
import {getIpDetails} from '../../FetchData/getIpDetails'
import { countryName } from '../../CountriesAbbservation'

import { weatherDetailsFetchInit } from "../weatherDetails/weatherDetails-actions";

const startFetchingIpDetails = () => ({
    type: ipDetailsTypes.FETCH_IP_DETAILS_START
})

const fetchingIpDetailsSuccess = (ipDetails) => ({
    type: ipDetailsTypes.FETCH_IP_DETAILS_SUCCESS,
    payload: ipDetails
})

const fetchingIpDetailsFielier = (errorMsg) => ({
    type: ipDetailsTypes.FETCH_IP_DETAILS_FIELIER,
    payload: errorMsg 
})


export const fetchIpDetailsInit = () => dispatch => {
    console.log("start fetching")
    dispatch(startFetchingIpDetails())
    getIpDetails().then((res) => {
        dispatch(fetchingIpDetailsSuccess(countryName[res.location.country]))
        dispatch(weatherDetailsFetchInit(countryName[res.location.country]))
    }).catch((error)=> {
        dispatch(fetchingIpDetailsFielier(error))
    })
}