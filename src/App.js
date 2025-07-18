import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import { projects } from './portfolio'
import useActiveSection from './hooks/useActiveSection'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const activeSection = useActiveSection()

  const backgrounds = {
    about: '#e3e6ea',
    projects: '#f8f8f8',
    skills: '#dbe6e4',
    contact: '#fff',
  }

  return (
    <div
      id='top'
      className={`${themeName} app`}
      style={{ background: backgrounds[activeSection] }}
    >
      <div className='header-container'>
        <Header className="header"/>
      </div>
      
    <main>
      <div className='centered-section'>
        <div id="about"><About /></div>
      </div>
      
      <div className='main-layout'>
        <div className='main-content'>
          <div id="projects"><Projects /></div>
        </div>

        <aside className='sidebar'>
          <div id="skills"><Skills /></div>
          <div className='project-nav'>
            <h3>Projects</h3>
            <ul>
              {projects.map((project) => (
                <li key={project.name}>
                  <a href={`#${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
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
