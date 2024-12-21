import React from "react";
import AboutMe from "../data/AboutMe.json";
import Slider from "../components/Slider";
import GuessGame from "../components/GuessGame";

function AboutMePage() {
  const sliderPhotos = AboutMe.map((item) => item.path);

  return (
    <>
      <div className="flex flex-col bg-tertiary lg:flex-row items-center md:pt-20 lg:pt-4 lg:pr-32">
        <div className="flex-1 flex justify-center h-[300px] md:h-[500px] lg:h-[800px]">
          <Slider photos={sliderPhotos} />
        </div>

        <div className="flex-1 flex flex-col items-center justify-start m-4 md:w-[80%] lg:max-w-[40%] bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div className=" w-40 h-40 md:w-48 md:h-48  ">
            <img
              src="/img/pedro.JPEG"
              alt="Pedro Franzina"
              className="rounded-full border-4 border-primary shadow-lg"
            />
          </div>

          <div className="text-center  ">
            <h1 className="text-3xl font-bold text-quaternary text-center pb-4">About Me</h1>
            <p className="text-gray-700 text-justify">
              Hi, I'm Pedro Franzina! I work with SAP and have always loved finding solutions to problems. This passion led me to learn web development, where problem-solving is a constant and exciting challenge. In my free time, I enjoy running, walking my dogs, and spending time in nature. I divide my time between Lisbon and Elvas, and my future plan is to continue enjoying the best of both worlds: the city and the countryside.
            </p>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mt-4 text-left">Fun Facts</h2>
              <ul className="list-disc list-inside text-gray-700 text-justify">
                <li>I have 2 dogs;</li>
                <li>I was the only person in my close family born in Lisbon;</li>
                <li>I'm left-handed (and also left-footed).</li>
              </ul>
            </div>
          </div>
          <div>
            <GuessGame />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMePage;
