import { useState, useEffect } from "react";
import Cities from "../data/Cities.json";
import DetailedMap from "../components/detailedMap";
import Slider from "../components/Slider";
import WeatherAPI from "../components/WeatherAPI";
import { getCurrentTimeInTimezone } from "../services/formatHour";

function DetailedPage({ selectedCity }) {
  const [cityDetails, setCityDetails] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (selectedCity) {
      const city = Cities.find((city) => city.city === selectedCity);
      setCityDetails(city);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (cityDetails?.timezone) {
      const updateTime = () => {
        const time = getCurrentTimeInTimezone(cityDetails.timezone);
        setCurrentTime(time);
      };

      updateTime();
      const intervalId = setInterval(updateTime, 1000);

      return () => clearInterval(intervalId);
    }
  }, [cityDetails]);

  if (!cityDetails) return null;

  return (
    <div className="bg-tertiary">
      <div className="flex flex-col  lg:flex-row md:pt-20 lg:pt-16 lg:pl-24">
        <div className="flex-1 w-full h-[300px] md:h-[392px] lg:h-[620px] flex justify-center items-center">
          <Slider photos={cityDetails.photos} cityName={cityDetails.city} />
        </div>
        <div className="flex-1 m-4 lg:m-0 lg:ml-14 bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold">{cityDetails.city}</h1>
          <p className="text-sm md:text-lg text-right font-semibold">{currentTime}</p>
          <h2 className="text-lg md:text-xl text-gray-700">{cityDetails.country}</h2>
          <p className="text-sm md:text-lg text-gray-600 text-justify">{cityDetails.description}</p>
        </div>
        <div className="flex-1 flex">
          <WeatherAPI
            latitude={cityDetails.latitude}
            longitude={cityDetails.longitude}
            city={cityDetails.city}
          />
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mt-6 text-center">Local Map</h1>
        <div className="mt-6 flex justify-center">
          <DetailedMap
            latitude={cityDetails.latitude}
            longitude={cityDetails.longitude}
            zoom={cityDetails.zoom}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailedPage;
