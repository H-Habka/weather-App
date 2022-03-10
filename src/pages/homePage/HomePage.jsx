import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'; 
import Button from '@mui/material/Button';
import { countryName } from '../../CountriesAbbservation';
import { getIpDetails } from '../../FetchData/getIpDetails';

const HomePage = () => {
    const ApiWeatherKey = '4fc4c4f9b1174e5d8ba145306220903'
    const [country,setCountry] = useState('')
    const  countries = Object.values(countryName).map(item => {
        return {label : item}
    })

    const handleSubmit = () =>{
        console.log(document.getElementById('combo-box-demo').value)
    }

    const getLocation = async() =>{
        let res = await getIpDetails()
        setCountry(countryName[res.location.country])
    }

    const getWeatherInfo = async() => {
        console.log('res')
    }


    // const
    // 
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={countries}
                sx={{ width: 300 }}
                renderInput={(params) => 
                                <TextField 
                                    {...params} 
                                    label="Country"
                                />}
            />

            <Button variant="contained" onClick={getWeatherInfo}>My Location</Button>
            <Button variant="contained" onClick={handleSubmit}>Check weather</Button>
        </>
    )
}

export default HomePage