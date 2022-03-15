export const filteredWeatherDetails = (weatherDetails) => {

    let forecast = weatherDetails.forecast.forecastday[0].hour.map(item => {
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

    return ({
        current :{
            condition: {
                icon: weatherDetails.current.condition.icon,
                text: weatherDetails.current.condition.text
            },
            humidity:  weatherDetails.current.humidity,
            pressure_mb: weatherDetails.current.pressure_mb,
            temp_c: weatherDetails.current.temp_c,
            wind_kph : weatherDetails.current.wind_kph,
        },
        forecast : forecast
    })
}