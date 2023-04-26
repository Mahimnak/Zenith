import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="922730816997-nm59j0023n96gk19uaamb5tcjstfchd5.apps.googleusercontent.com">
            <Router>
                <App/>    
            </Router>
        </GoogleOAuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

