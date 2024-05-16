import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <header>
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              id="search-form-input"
              className="search-form-input"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
            />
          </form>
        </header>
        <main>
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
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Maria-Sousa-GH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maria Sousa
          </a>
          , is{" "}
          <a
            href="https://github.com/Maria-Sousa-GH/vanilla-weather-search-project-setup-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          and{" "}
          <a
            href="https://mariasousagh-weather-app-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
