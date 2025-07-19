import { useContext, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { about, projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul className={`nav__list ${showNavList ? 'show' : ''}`}>
        {about.name ? (
          <li className='nav__list-item'>
            <a
              href='#top'
              onClick={toggleNavList}
              className='link link--nav'
            >
              About
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <div className="theme-toggle">
        <label htmlFor="theme-toggle-checkbox">
          <input
            id="theme-toggle-checkbox"
            type="checkbox"
            checked={themeName === 'dark'}
            onChange={toggleTheme}
          />
          <ion-icon class="sun" name="sunny" />
          <ion-icon class="moon" name="moon" />
          <span className="toggle" />
        </label>
      </div>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
