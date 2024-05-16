import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
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
