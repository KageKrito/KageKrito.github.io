import { useEffect, useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'

const ParticlesBg = () => {
  const [{ themeName }] = useContext(ThemeContext)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768

    const config = {
      particles: {
        number: { value: isMobile ? 30 : 60 },
        color: {
          value: themeName === 'dark' ? '#ffffff' : '#000000',
        },
        line_linked: {
          enable: true,
          distance: isMobile ? 100 : 200,
          color: themeName === 'dark' ? '#ffffff' : '#000000',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
        },
      },
      retina_detect: true,
    }

    // destroy previous instance if exists
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS()
      window.pJSDom = []
    }

    window.particlesJS('particles-js', config)
  }, [themeName])

  return <div id="particles-js" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -100,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  }} />
}

export default ParticlesBg