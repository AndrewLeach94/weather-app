import { applyEventListeners } from "./interface.js";
import { getLocalWeather } from "./gpsLocation";

document.onreadystatechange = function () {
    if (document.readyState === 'loading') {
      const loadScreen = document.createElement("div");
      loadScreen.id = "load-screen";
      document.body.appendChild(loadScreen);
    }
  };

window.addEventListener("load", () => {
    //attempt to fetch the user's local weather on load
    getLocalWeather;
    applyEventListeners();
});

