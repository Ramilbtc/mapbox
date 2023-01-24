import React, { useState, useLayoutEffect } from "react";
import { render } from "react-dom";
import { useMapbox } from "./useMapbox";

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox({
    container: "map",
    center: [37.61192, 55.76199],
    zoom: -10
  });
  return (
    <>
      <button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
