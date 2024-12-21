import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

function DetailedMap({ latitude, longitude, zoom }) {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicGVkcm9mcmFuemluYSIsImEiOiJjbTNsbWxjYWcwdTVjMmpzN2I1bXhjc2Q2In0.qxBBsgBTvH33qkpyxUoogw';

        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            center: [longitude, latitude],
            zoom: zoom,
        });

    }, [latitude, longitude, zoom]);

    return (
        <div className="w-full lg:w-[1600px] h-[300px] md:h-[600px]">
            <div id="map" className="h-full"></div>
        </div>
    );
}

export default DetailedMap;
