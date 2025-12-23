import './App.css'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Router'
import './SmartLingPage.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
