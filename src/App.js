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

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <div className='header-container'>
        <Header className="header"/>
      </div>
      
    <main>
      <div className='centered-section'>
        <About />
      </div>
      
      <div className='main-layout'>
        <div className='main-content'>
          <Projects />
        </div>

        <aside className='sidebar'>
          <Skills />
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
        <Contact />
      </div>
    </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
