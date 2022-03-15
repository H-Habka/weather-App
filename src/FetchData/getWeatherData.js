export const getWeatherData = async(key,country) => {
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${country}&aqi=no`)
    return await res.json()
}