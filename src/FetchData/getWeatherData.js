const getWeatherData = async(key,country) => {
    let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${country}&aqi=no`)
    return await res.json()
}

// 4fc4c4f9b1174e5d8ba145306220903
// Syria

export const getCurrentWeather = async (key,country) => {
    let res = await getWeatherData(key,country)
    return ({
        condition: {
            icon: res.current.condition.icon,
            text: res.current.condition.text
        },
        humidity:  res.current.humidity,
        pressure_mb: res.current.pressure_mb,
        temp_c: res.current.temp_c,
        wind_kph : res.current.wind_kph,
    })
}


export const getDayWeather = async (key,country) => {
    let res = await getWeatherData(key,country)
    return res.forecast.forecastday[0].hour.map(item => {
        return {
            condition: {
                icon: item.condition.icon,
                text: item.condition.text
            },
            humidity:  item.humidity,
            pressure_mb: item.pressure_mb,
            temp_c: item.temp_c,
            wind_kph : item.wind_kph,
            time:item.time
        }
    })
}