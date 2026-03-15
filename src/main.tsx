import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initializeEmailJS } from './lib/emailjs-config'

// Initialize EmailJS once at app startup
initializeEmailJS()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
