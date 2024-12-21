import { useState } from "react";
import Cards from "../components/Cards";
import ContinentButton from "../components/ContinentButton";
import FrontMap from "../components/FrontMap";
import Slider from "../components/Slider";
import HomepagePhotos from "../data/HomepagePhotos.json";
import WelcomeBox from "../components/WelcomeBox";

function HomePage() {
  const [selectedContinent, setSelectedContinent] = useState(null);
  const sliderHomePhotos = HomepagePhotos.map((photo) => photo.path);

  return (
    <>
      <div className="bg-tertiary">
        <div className="flex flex-col space-y-6 md:flex-row md:pt-20 lg:pt-4">
          <div className="flex-1 w-full h-[300px] md:h-[392px] flex justify-center items-center md:pt-6">
            <Slider photos={sliderHomePhotos} />
          </div>
          <div className="p-4 flex-1 w-full flex justify-center items-center md:m-4 md:p-0">
            <WelcomeBox />
          </div>
        </div>
        <div className="p-4">
          <ContinentButton onSelectContinent={setSelectedContinent} />
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Cards selectedContinent={selectedContinent} />
          </div>
          <div className="mt-8">
            <FrontMap selectedContinent={selectedContinent} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

