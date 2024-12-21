import { useState, useEffect } from "react";
import fetchWeather from "../services/fetchWeather";

function WeatherAPI({ latitude, longitude }) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (latitude && longitude) {
            fetchWeather(latitude, longitude).then(setWeatherData);
        }
    }, [latitude, longitude]);

    return (
        <div className=" weather-container bg-gradient-to-l from-blue-500 via-blue-400 to-blue-300 p-6 rounded-lg shadow-lg mx-auto">
            {weatherData && weatherData.current_weather ? (
                <>
                    <p className="text-lg text-gray-100 ">
                        <span className=" font-medium">{weatherData.current_weather.temperature}°C</span>
                    </p>
                    <h4 className="text-xl font-semibold text-white text-right">7-Day Forecast</h4>
                    <ul className="flex-wrap h-full text-left mt-4 text-gray-100 space-y-2">
                        {weatherData.daily.time.map((date, index) => (
                            <li
                                key={date}
                                className="flex flex-col items-center justify-center  bg-blue-600/20 hover:bg-blue-600/50 hover:cursor-pointer px-2 py-2 rounded-lg"
                            >
                                <p className="font-medium text-center">
                                    {`${new Date(date).toLocaleString('en-EN', { weekday: 'long' })}, 
                                    ${new Date(date).toLocaleString('pt-PT', { day: '2-digit', month: '2-digit' })}`}
                                </p>
                                <div className="flex justify-between gap-20">
                                    <span className="text-center">Min {weatherData.daily.temperature_2m_min[index]}°C</span>
                                    <span className="text-center">Max {weatherData.daily.temperature_2m_max[index]}°C</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p className="text-white">Loading weather data...</p>
            )}
        </div>
    );
}

export default WeatherAPI;
