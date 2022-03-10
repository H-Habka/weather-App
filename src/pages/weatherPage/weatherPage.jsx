import React, { useEffect,useState } from 'react'
import './weatherPage.scss'
import SettingsIcon from '@mui/icons-material/Settings';
import CurrentWeatherInfo from '../../components/current-weather-info/CurrentWeatherInfo';
import WeatherListContainer from '../../components/weather-list-container/WeatherListContainer';
import { getCurrentWeather, getDayWeather } from '../../FetchData/getWeatherData';

const WeatherPage = () => {
    const [currentWeather,setCurrentWeather] = useState({})
    const [dayWeather,setDayWeather] = useState([])
    let test = "test"
    const ApiWeatherKey = '4fc4c4f9b1174e5d8ba145306220903'

    useEffect(() => {
        const getData = async()=>{
            setDayWeather(await getDayWeather(ApiWeatherKey,'Syria'))
            setCurrentWeather(await getCurrentWeather(ApiWeatherKey,'Syria'))
        }
        getData()
    },[])

    // useEffect(()=> {
    //     console.log('dayWeather: ', dayWeather)
    //     console.log('currentWeather: ',currentWeather)
    // },[dayWeather,currentWeather])
    
 
    return (
        <>
            <div className="container">
                <SettingsIcon className="settingIcon" />

                <div className="image-container" style={{
                    backgroundImage: `url(${test})`
                }}>

                </div>
                <CurrentWeatherInfo currentWeather={currentWeather}/>
                <WeatherListContainer dayWeather={dayWeather}/>
            </div>
        </>

    )
}

export default WeatherPage