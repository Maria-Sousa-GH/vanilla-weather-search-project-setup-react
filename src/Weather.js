import React from "react";

export default function Weather() {
  return (
    <div>
      <div>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="search-form-input"
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </div>
      <div>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="city"></h1>
            <p className="weather-app-details">
              <span id="time"></span>,<span id="description"></span>
              <br />
              Humidity: <strong id="humidity"></strong>, Wind:{" "}
              <strong id="wind-speed"></strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div id="icon">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
                className="weather-app-icon"
                alt="Weather Icon"
              />
            </div>
            <div className="weather-app-temperature" id="temperature"></div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
