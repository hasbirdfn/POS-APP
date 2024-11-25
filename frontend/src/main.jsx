import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Provider } from 'react-redux';
import {store} from './store/index.js';
import axios from "axios";
import DarkModeContextProvider from './context/DarkMode.jsx';

axios.defaults.headers.post["Content-type"] = 
"application/x-www-form-urlencoded";
axios.defaults.baseURL =  import.meta.env.VITE_API_URL
axios.defaults.timeout =  import.meta.env.VITE_API_TIMEOUT

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <DarkModeContextProvider>
    <App />
    </DarkModeContextProvider>
    </Provider>
  </StrictMode>,
)
