import { useState, useEffect } from "react";
import Cities from "../data/Cities.json";
import { Link } from "wouter";

function Cards({ selectedContinent }) {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    if (selectedContinent) {
      setCityData(Cities.filter((city) => city.continent === selectedContinent));
    } else {
      setCityData([]);
    }
  }, [selectedContinent]);

  if (!selectedContinent) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {cityData.map((city) => (
        <Link key={city.id} href={`/${city.city}`}>
          <div className="bg-white border w-[250px] border-gray-200 rounded-lg hover:transition-all duration-500 cursor-pointer shadow-md hover:shadow-xl hover:bg-slate-300 hover:shadow-gray-500/50 overflow-hidden">
            <img className="w-300 h-48 object-cover" src={city.photos[0]} alt={city.city} />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 text-right">{city.city}</h3>
              <p className="text-gray-600 text-right">From: {city.arriveDate}</p>
              <p className="text-gray-600 text-right">To: {city.departureDate}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;