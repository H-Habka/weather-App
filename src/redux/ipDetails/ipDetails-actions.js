import { ipDetailsTypes } from "./ipDetails-types"; 
import {getIpDetails} from '../../FetchData/getIpDetails'

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
        dispatch(fetchingIpDetailsSuccess(res))
    }).catch((error)=> {
        dispatch(fetchingIpDetailsFielier(error))
    })
}






// export const fetchInit = () => dispatch => {
//     dispatch(dataFetchBegin())
//     getDataFromCollection('colections')
//     .then(res => {
//         dispatch(dataFetchSuccess(res.map(item => item.data())))
//     }).catch(err => dispatch(dataFetchFalier(err)))

// }