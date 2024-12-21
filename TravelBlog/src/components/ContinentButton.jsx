import { useState, useEffect } from "react";
import Cities from "../data/Cities.json";

function ContinentButton({ onSelectContinent }) {
    const [buttonData, setButtonData] = useState([]);

    useEffect(() => {
        const uniqueContinents = [];
        Cities.forEach((city) => {
            if (!uniqueContinents.includes(city.continent)) {
                uniqueContinents.push(city.continent);
            }
        });
        setButtonData(uniqueContinents);
    }, []);

    return (
        <div className="flex flex-wrap gap-4 justify-center my-4">
            {buttonData.map((button) => (
                <button
                    onClick={() => onSelectContinent(button)}
                    className="relative overflow-hidden px-7 py-3 text-[17px] font-normal uppercase border border-[#00A97F] rounded-md bg-transparent text-[#00A97F] text-2xl transition-all duration-500 ease-in-out cursor-pointer group active:brightness-90"
                >
                    <span className="absolute w-[50px] h-[50px] bg-quaternary rounded-full top-[-1em] left-[-1em] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out group-hover:w-[410px] group-hover:h-[410px]"></span>
                    <span className="absolute w-[50px] h-[50px] bg-quaternary rounded-full top-[calc(100%+1em)] left-[calc(100%+1em)] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out group-hover:w-[410px] group-hover:h-[410px]"></span>
                    <span className="relative z-[1] group-hover:text-[rgb(10,25,30)] transition-colors">
                        {button}
                    </span>
                </button>
            ))}
        </div>
    );
}

export default ContinentButton;