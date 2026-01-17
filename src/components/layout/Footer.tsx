import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer style={{ left: 0, bottom: 0, width: "100%",marginTop: "2rem", textAlign: "center"}}>
        <small>&copy; {new Date().getFullYear()} Todos os direitos reservados.</small>
      </footer>
    </>
  )
}

export default Footer;