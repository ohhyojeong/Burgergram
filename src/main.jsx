import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import './index.css'
import {AuthContextPro} from './context/AuthContext';
import { FeedProvider } from './context/FeedContext';
import './styles/global.css';

createRoot(document.getElementById('root')).render(  
    <AuthContextPro>
        <FeedProvider>
              <App />
        </FeedProvider>
    </AuthContextPro>
)
