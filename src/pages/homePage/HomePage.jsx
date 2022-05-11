import React from 'react'
import './HomePage.scss'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { countries } from '../../CountriesAbbservation';
import { connect } from 'react-redux';
import { fetchIpDetailsInit } from '../../redux/ipDetails/ipDetails-actions';
import { weatherDetailsFetchInit } from '../../redux/weatherDetails/weatherDetails-actions';
import { useNavigate } from 'react-router';



const HomePage = ({ initIpDetailsFetching, initWeatherDetailsFetching }) => {

    const navigate = useNavigate()

    const getWeatherInfo = () => {
        let selectedCountryFromInput = document.getElementById('combo-box-demo').value
        initWeatherDetailsFetching(selectedCountryFromInput)
        navigate('/#/weather-App/weather')

    }

    const getIpDetailsInfo = () => {
        initIpDetailsFetching()
        navigate('/#/weather-App/weather')
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
                        renderInput={(params) => <TextField {...params} label="Country" />}
                    />
                    <div className="buttons-container">
                        <Button variant="contained" onClick={getIpDetailsInfo}>Get My Location</Button>
                        <Button variant="contained" onClick={getWeatherInfo}>Is It Raining ?</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    currentLocationCountry: state.currentLocationCountry
})

const mapDispatchToProps = dispatch => ({
    initIpDetailsFetching: () => dispatch(fetchIpDetailsInit()),
    initWeatherDetailsFetching: (country) => dispatch(weatherDetailsFetchInit(country))

})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)