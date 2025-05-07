import React from 'react';
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
    const login = useGoogleLogin({
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
        onSuccess: (tokenResponse) => {
            console.log("Login success:", tokenResponse);
            localStorage.setItem('access_token', tokenResponse.access_token);
        },
        onError: (errorResponse) => {
            console.error("Login failed", errorResponse);
        },
        flow: "implicit"
    });

    return (
        <div>
            <h2>Google Login</h2>
            <button onClick={() => login()}>Sign in with Google</button>
        </div>
        
    );
};

export default Login;