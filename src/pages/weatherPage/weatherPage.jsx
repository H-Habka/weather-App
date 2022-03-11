import React, {useState} from 'react'
import './weatherPage.scss'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrentWeatherInfo from '../../components/current-weather-info/CurrentWeatherInfo';
import WeatherListContainer from '../../components/weather-list-container/WeatherListContainer';
import { countries } from '../../CountriesAbbservation';


const WeatherPage = () => {
    const [changeCountryPopupState, setChangeCountryPopupState] = useState(false)

    const handleSubmit = () => {
        console.log(document.getElementById('combo-box-demo').value)
    }
    let test = "test"

    return (
        <>
            <div className="Weather-page-container">
                <SettingsIcon className="settingIcon" onClick={() => { setChangeCountryPopupState(!changeCountryPopupState) }} />

                <div className="image-container" style={{
                    backgroundImage: `url(${test})`
                }}></div>
                <CurrentWeatherInfo />
                <WeatherListContainer />
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
                            <Button variant="contained" onClick={handleSubmit}>Check weather</Button>
                        </div>
                    </div>
                ) : ('')
            }
        </>
    )
}

export default WeatherPage