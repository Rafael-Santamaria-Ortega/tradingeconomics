# Trading Economics Project

This project visualizes the 3-year GDP and population growth forecasts for Mexico, New Zealand, Thailand, and Sweden based on 2023 data. The project aims to demonstrate front-end and back-end development skills at an entry-level, in alignment with the Trading Economics hiring process.

## Table of Contents

- [Overview](#overview)
- [Backend](#backend)
- [API Connection](#api-connection)
- [Frontend](#frontend)
  - [HTML](#html)
  - [JavaScript](#javascript)
  - [CSS](#css)
- [How to Run](#how-to-run)
- [License](#license)

## Overview

The project consists of a backend server that fetches data from the Trading Economics API and a frontend that displays the data in a table format. The data includes GDP and population forecasts for the selected countries.

## Backend

The backend is built using Flask, a lightweight web framework for Python. It serves as an intermediary between the Trading Economics API and the frontend.

### Key Components

- **Flask**: The web framework used to create the backend server.
- **flask-cors**: A Flask extension for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible.
- **tradingeconomics**: A Python library to interact with the Trading Economics API.

### Backend Code
- flasku.py

### Backend API Connection

The backend connects to the Trading Economics API to fetch the latest GDP and population data. The API key is stored in a file and read by the backend to authenticate the requests.

### API Key
The API key is stored in a file named te_api.pem located in the ./tradecon/ directory. The backend reads this key to authenticate with the Trading Economics API.

## Frontend
The frontend is built using HTML, JavaScript, and CSS. It displays the data fetched from the backend in a table format.

### HTML
The HTML file defines the structure of the webpage, including the table to display the data and the footer with links to GitHub and LinkedIn.

### HTML Code
- index.html

### JavaScript
- retrieval.js

### CSS
- style.css