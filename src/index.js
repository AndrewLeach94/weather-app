import getCurrentWeather from "./weather-data";
import { applyEventListeners } from "./interface.js";

window.addEventListener("load", () => {
    getCurrentWeather("New Orleans", "imperial");
    applyEventListeners();
});
