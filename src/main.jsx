import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import './index.css'
import AuthContext from './context/AuthContext';


createRoot(document.getElementById('root')).render(  
    <AuthContext>
        <App />
    </AuthContext>
)
