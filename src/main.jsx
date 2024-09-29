import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PixaBayState from './context/PixaBayState.jsx'

createRoot(document.getElementById('root')).render(
  <PixaBayState>
    <App />
  </PixaBayState>,
)
