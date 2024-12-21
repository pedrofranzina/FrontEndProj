import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Cities from '../data/Cities.json';

function FrontMap({ selectedContinent, markers = true }) {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicGVkcm9mcmFuemluYSIsImEiOiJjbTNsbWxjYWcwdTVjMmpzN2I1bXhjc2Q2In0.qxBBsgBTvH33qkpyxUoogw';

    let mapCenter = [8, 23];
    let mapZoom = 1.38;
    if (selectedContinent === "Africa") {
      mapCenter = [32, 1];
      mapZoom = 2.6;
    } else if (selectedContinent === "Europe") {
      mapCenter = [15, 48];
      mapZoom = 3.5;
    } else if (selectedContinent === "America") {
      mapCenter = [-70, 9];
      mapZoom = 2.8;
    }

    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      center: mapCenter,
      zoom: mapZoom,
    });

    if (markers) {
      Cities.forEach((city) => {
        new mapboxgl.Marker()
          .setLngLat([city.longitude, city.latitude])
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<h3>${city.city}</h3>
              <p>${city.country}</p>
              `
            )
          )
          .addTo(map);
      });
    }

    return () => map.remove();
  }, [selectedContinent]);

  return (
    <div className="flex justify-center items-center">
      <div id="map" className="w-[1400px] h-[600px]"></div>
    </div>
  );
}

export default FrontMap;
