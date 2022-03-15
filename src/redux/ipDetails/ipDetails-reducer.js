import { ipDetailsTypes } from "./ipDetails-types"; 

const INITIAL_STATE = {
    isFetchingDetailsStatus : false,
    currentLocationCountry : '',
    errorMessage : ''
}


export const ipDetailsReducer = (state = INITIAL_STATE , action) => {
    switch (action.type){
        case ipDetailsTypes.FETCH_IP_DETAILS_START:
            return ({
                ...state,
                isFetchingDetailsStatus: true
            })
        case ipDetailsTypes.FETCH_IP_DETAILS_SUCCESS:
            return ({
                ...state,
                isFetchingDetailsStatus : false,
                currentLocationCountry : action.payload
            })
        case ipDetailsTypes.FETCH_IP_DETAILS_FIELIER:
            return ({
                ...state,
                isFetchingDetailsStatus:false,
                errorMessage : action.payload
            })
            
        default : return state
    }
}