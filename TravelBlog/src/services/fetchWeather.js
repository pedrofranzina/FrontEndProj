async function fetchWeather(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min`);
    const result = await response.json();
    return result;
}

export default fetchWeather;
