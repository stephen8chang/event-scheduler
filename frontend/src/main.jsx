import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./pages/App"
import { GoogleOAuthProvider } from "@react-oauth/google"

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="992227993950-psvkshb085loqmvmu1jr7ecp19r09i5d.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
    );

