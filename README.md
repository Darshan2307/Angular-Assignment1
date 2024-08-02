# Angular Web Application

This is a client-side web application built using Angular 18. The application includes client-side navigation, API consumption using Angular service with HTTP client, and reactive forms. The application is deployed to a public server or platform.

## Features

- Client-side navigation with Angular Router
- API data consumption using Angular service and HTTP client
- Reactive forms with validation
- Deployed to a public server or platform

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:2024-Summer-ITE-5425-0NA/angular-assignment-Jaysojitra13.git
   cd angular-web-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the development server:

   ```bash
   ng serve
   ```

### Pages

- **Home Page**: A simple landing page with introductory text.
- **API Data Page**: Consumes data from a public API and displays it.
- **Form Page**: Contains a reactive form to submit user feedback with validation.

### Services

- **ApiService**: Handles API requests using Angular's HttpClient.

### Components

- **HomeComponent**: Displays the home page.
- **ApiDataComponent**: Displays data from the API.
- **FormComponent**: Contains the reactive form.

## Deployment

1. Build the application for production:

   ```bash
   ng build --prod
   ```
