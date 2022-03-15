import SettingsIcon from '@mui/icons-material/Settings';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { countries } from '../../CountriesAbbservation';
import './settingIcon.scss'
import { weatherDetailsFetchInit } from '../../redux/weatherDetails/weatherDetails-actions';
import { connect } from 'react-redux';


const SettingIconWithPopup = ({initWeatherDetailsFetching,selectedCountry}) => {
    const [changeCountryPopupState, setChangeCountryPopupState] = useState(false)

    const getWeatherInfo = () => {
        setChangeCountryPopupState(false)
        let selectedCountryFromInput = document.getElementById('combo-box-demo').value
        initWeatherDetailsFetching(selectedCountryFromInput)
    }
    return (
        <>
            <div className="setting-icon-container">
                <SettingsIcon className="settingIcon" onClick={() => { setChangeCountryPopupState(!changeCountryPopupState) }} />
                <div className='country-name'>{selectedCountry}</div>
            </div>
            {
                changeCountryPopupState ? (
                    <div className="popup-container" onClick={
                        (e) => {
                            if (e.target.className === 'popup-container')
                                setChangeCountryPopupState(false)
                        }}>
                        <div className="enter-anothe-country-popup">
                            <h3 className="popup-title">
                                Chose Another Country
                            </h3>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={countries}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params}label="Country"/>}
                                />
                            <Button variant="contained" onClick={getWeatherInfo}>Check weather</Button>
                        </div>
                    </div>
                ) : ('')
            }
        </>
    )
}

const mapStateToprops = state =>({
    selectedCountry : state.weatherDetails.selectedCountry
})

const mapDispatchToProps = dispatch => ({
    initWeatherDetailsFetching : (country) => dispatch(weatherDetailsFetchInit(country))
    
})

export default connect(mapStateToprops,mapDispatchToProps)(SettingIconWithPopup)