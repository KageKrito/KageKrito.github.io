import { useContext, useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import FunProjects from './components/FunProjects/FunProjects'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import useActiveSection from './hooks/useActiveSection'
import ParticlesBackground from './components/ParticlesBg/ParticlesBg'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const activeSection = useActiveSection()
  const [showResume, setShowResume] = useState(false)
  document.documentElement.className = themeName;

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, [])

  return (
    <div
      id='top'
      className={`${themeName} app`}
    >
      <ParticlesBackground />
      <div className='header-container'>
        <Header className="header"/>
      </div>
      
    <main>
      <div className='centered-section'>
        <div id="about"><About showResume={showResume} setShowResume={setShowResume} /></div>
        <div id="resume">{showResume && <Resume onClose={() => setShowResume(false)} />}</div>
      </div>
      
      <div className='skills-layout'>
        <div id="skills"><Skills /></div>
      </div>

      <div className='projects-layout'>
        <div id="projects"><Projects /></div>
      </div>

      <div className='fun-projects-layout'>
        <div id="funprojects"><FunProjects /></div>
      </div>

      <div className='centered-section'>
        <div id="contact"><Contact /></div>
      </div>
    </main>

      <ScrollToTop activeSection={activeSection} />
      <Footer />
    </div>
  )
}

export default App
