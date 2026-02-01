import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import Nav from './components/layout/Nav.tsx'
import '@fortawesome/fontawesome-free/css/all.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>,
)
