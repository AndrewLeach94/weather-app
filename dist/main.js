/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ \"./src/weather-data.js\");\n\r\n\r\n(0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather-data.js":
/*!*****************************!*
  !*** ./src/weather-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\nconst getCurrentWeather = async (requestedLocation) => {\r\n    try {\r\n        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=new%20orleans&units=imperial&appid=62559260c941ebf6fd752e2570f6c760', {mode: 'cors'});\r\n        const weatherData = await response.json();\r\n\r\n        \r\n        //receives the data\r\n        const city =  weatherData.name;\r\n        const temp =  weatherData.main.temp;\r\n        const highTemp =  weatherData.main.temp_max;\r\n        const lowTemp =  weatherData.main.temp_min;\r\n        const feelsLike =  weatherData.main.feels_like;\r\n        const humidity =  weatherData.main.humidity;\r\n        const weatherType =  weatherData.weather[0].main;\r\n        const windSpeed =  weatherData.wind.speed;\r\n\r\n        return { city, temp, highTemp, lowTemp, feelsLike, humidity, weatherType, windSpeed };\r\n\r\n    } catch(err) {\r\n        console.error(\"Something went wrong\");\r\n    } \r\n\r\n};\r\n\r\n const displayCurrentWeather = async () => {\r\n    try { \r\n        const weatherData = await getCurrentWeather();\r\n\r\n        const displayTemperature = (temperature) => {\r\n            //temperature needs to be rounded to closest whole number\r\n            const roundTemperature = (() => Math.round(temperature))();\r\n\r\n            //append the rounded temperature to page\r\n            const display = document.querySelector(\"#current-temperature\");\r\n            display.textContent = roundTemperature + \"°\";\r\n\r\n        };\r\n\r\n        const displayCity = (city) => {\r\n            const display = document.querySelector(\"#current-city\");\r\n            display.textContent = city;\r\n        };\r\n\r\n        const displayType = (type) => {\r\n            const display = document.querySelector(\"#current-conditions\");\r\n            display.textContent = type;\r\n        };\r\n\r\n        const displayHumidity = (humidity) => {\r\n            const display = document.querySelector(\"#current-humidity\");\r\n            display.textContent = `Humidity:  ${humidity}%`;\r\n        };\r\n\r\n        const displayFeelsLike = (feel) => {\r\n            //temperature needs to be rounded to closest whole number\r\n            const roundTemperature = (() => Math.round(feel))();\r\n\r\n            const display = document.querySelector(\"#current-feel\");\r\n            display.textContent = `Feels Like: ${roundTemperature}°`;\r\n        };\r\n\r\n        const displayWind = (wind) => {\r\n            //temperature needs to be rounded to closest whole number\r\n            const roundSpeed= (() => Math.round(wind))();\r\n\r\n            const display = document.querySelector(\"#current-wind\");\r\n            display.textContent = `Wind: ${roundSpeed} mph`;\r\n        };\r\n\r\n\r\n\r\n\r\n        \r\n        \r\n        \r\n        displayTemperature(weatherData.temp);\r\n        displayCity(weatherData.city);\r\n        displayType(weatherData.weatherType);\r\n        displayHumidity(weatherData.humidity);\r\n        displayFeelsLike(weatherData.feelsLike);\r\n        displayWind(weatherData.windSpeed);\r\n\r\n\r\n    }\r\n    catch (error) {\r\n        console.error(\"Current weather couldn't be loaded\");\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCurrentWeather);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/weather-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;