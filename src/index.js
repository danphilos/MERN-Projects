
// This is the main Entry to the React App
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // Global CSS styles
import App from './App';  // Root component for the React App

// This is JSX code , its HTML in JS code
//Get the 'root' div from index.html and render the App component into it
const root = ReactDOM.createRoot(document.getElementById('root'));  // This creates the react DOM container where the app will be rendered

// This renders or creates the starting point or the root node of the APP
// // Render the App component inside the root div
root.render(<App />);  

 

