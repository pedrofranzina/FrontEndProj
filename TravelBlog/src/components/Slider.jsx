import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";

const Slider = ({ photos, cityName, }) => {
    return (
        <div id="app" className="h-full md:pl-4 flex justify-center items-center">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="m-0 p-0 w-full h-full max-w-lg pt-12 pb-12"
            >
                {photos.map((photo, index) => (
                    <SwiperSlide
                        key={index}
                        className="w-[300px] h-[300px] bg-center bg-cover"
                    >
                        <img
                            src={photo}
                            alt={`Photo ${index + 1} of ${cityName}`}
                            className="block w-full h-full object-cover md:rounded-lg shadow-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
