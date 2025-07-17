import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <span className='footer__link'>
      © {new Date().getFullYear()} Oliver Heckel
    </span>
  </footer>
)

export default Footer
