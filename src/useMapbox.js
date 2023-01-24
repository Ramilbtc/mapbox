import mapboxgl from "mapbox-gl";
import { useLayoutEffect } from "react";

export const useMapbox = (params = {}) => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.61192, 55.76199],
      zoom: 10,
      ...params
    });
  }, []);
};
