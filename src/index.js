import getCurrentWeather from "./weather-data";
import { applyEventListeners } from "./interface.js";

document.onreadystatechange = function () {
    if (document.readyState === 'loading') {
      const loadScreen = document.createElement("div");
      loadScreen.id = "load-screen";
      document.body.appendChild(loadScreen);
    }
  };

window.addEventListener("load", () => {
    getCurrentWeather("New Orleans", "imperial");
    applyEventListeners();
});
