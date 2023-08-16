# api-trainning-consumed

# Backend and Frontend API Interaction Example

This project demonstrates how to create a simple backend API using Express.js, consume that API from the frontend using Fetch or Axios, and also interact with an external API from the backend. The backend API fetches data from an external source and serves it to the frontend, where it is displayed in a simple HTML page.

## Prerequisites

- Node.js installed on your machine

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the backend folder:
3. Install the backend dependencies:
4. Start the backend server:
5. Open a new terminal window and navigate to the frontend folder:
6. Open the `index.html` file in your preferred web browser.

## Backend API

The backend API is created using Express.js and is responsible for fetching data from an external API and serving it to the frontend.

- The Express app is configured to run on port 4567.
- CORS middleware is used to enable cross-origin requests.
- The `/` route fetches data from 'https://jsonplaceholder.typicode.com/users' and serves it to the frontend.

## Frontend

The frontend is a simple HTML page with JavaScript code to fetch data from the backend API and display it on the page.

- Open the `index.html` file in your browser to see a list of user names fetched from the backend API.

## Important Files

- **backend/app.js:** Backend API implementation using Express.js and Axios to fetch data from an external API.
- **frontend/index.html:** Simple HTML page to display the fetched data.

## Usage

1. Start the backend server as described in the "Getting Started" section.
2. Open the `index.html` file in your browser. You should see a list of user names fetched from the backend API.

## Contributing

Contributions are welcome! If you find any issues or have improvements to suggest, please create a pull request.

## License

This project is licensed under the MIT License.
