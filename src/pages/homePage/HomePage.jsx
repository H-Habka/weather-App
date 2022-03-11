import React from 'react'
import './HomePage.scss'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { countries } from '../../CountriesAbbservation';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { currentLocationCountry } from '../../redux/ipDetails/ipDetails-selector';
import { fetchIpDetailsInit } from '../../redux/ipDetails/ipDetails-actions';
import { weatherDetailsFetchInit } from '../../redux/weatherDetails/weatherDetails-actions'; 

const HomePage = ({currentLocationCountry,initIpDetailsFetching,initWeatherDetailsFetching}) => {

    const getWeatherInfo = () => {
        let selectedCountryFromInput = document.getElementById('combo-box-demo').value
        initWeatherDetailsFetching(selectedCountryFromInput)
    }

    const getIpDetailsInfo = () => {
        initIpDetailsFetching()
    }

    return (
        <>
            <div className="home-page-container">
                <div className='content-container'>
                    <h2 className="enter-country-title">
                        Enter Country To Get Weather Details
                    </h2>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={countries}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Country"/>}
                    />
                    <Button variant="contained" onClick={getWeatherInfo}>Check weather</Button>
                    <Button variant="contained" onClick={getIpDetailsInfo}>My Location</Button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    currentLocationCountry : currentLocationCountry
})

const mapDispatchToProps = dispatch => ({
    initIpDetailsFetching : () => dispatch(fetchIpDetailsInit()),
    initWeatherDetailsFetching : (country) => dispatch(weatherDetailsFetchInit(country))
    
})

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)