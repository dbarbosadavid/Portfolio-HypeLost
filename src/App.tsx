import './App.css'
import Table from './components/Table'
import hypelostLogo from './assets/hypelost.png'
import { SocialMedias } from './components/SocialMedias'

function App() {
  return (
    <>
      <p><img width={100} style={{borderRadius: "20px"}} src={hypelostLogo} alt="HypeLost" /></p>
      <SocialMedias />
      <h1>Portfolio</h1>
      <Table />
      <footer style={{ left: 0, bottom: 0, width: "100%",marginTop: "2rem", padding: "1rem", textAlign: "center", boxShadow: "0 -2px 8px rgba(0,0,0,0.05)",}}>
        <small>&copy; {new Date().getFullYear()} Todos os direitos reservados.</small>
      </footer>
    </>
  )
}

export default App
