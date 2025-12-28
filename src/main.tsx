import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'

// This code tells React: “Use the element with id root as the app container, 
// wrap the app in StrictMode for safety, and render the App component inside it.”
createRoot(document.getElementById('root')!).render(
  // A tool for highlighting potential problems in your application. 
  // It doesn’t render anything visible in the UI — it’s only for development purposes.
  <StrictMode>
    <App />
  </StrictMode>,
)
