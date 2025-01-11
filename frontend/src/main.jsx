import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Solar_recycle from './components/solar_recycle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Solar_recycle />
  </StrictMode>,
)
