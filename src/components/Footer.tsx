import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer style={{ left: 0, bottom: 0, width: "100%",marginTop: "2rem", padding: "1rem", textAlign: "center", boxShadow: "0 -2px 8px rgba(0,0,0,0.05)",}}>
        <small>&copy; {new Date().getFullYear()} Todos os direitos reservados.</small>
      </footer>
    </>
  )
}

export default Footer;