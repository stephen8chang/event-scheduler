// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Vite uses the new React 18 root API
// import App from './App'; // Ensure this is correct
// import './index.css'; // Optional, for any global styles

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./pages/App"

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

