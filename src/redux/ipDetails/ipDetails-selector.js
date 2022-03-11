import {createSelector} from 'reselect'
import { countryName } from '../../CountriesAbbservation'

const ipDetails = (state) => state.ipDetails

export const currentLocationCountry = createSelector(
    [ipDetails],
    (ipDetails) => countryName[ipDetails?.location?.country]
)