import { useState, useRef, useEffect } from 'react'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  const [activeSkill, setActiveSkill] = useState(null)
  const wrapperRef = useRef(null)

  const handleClick = (skillName) => {
    setActiveSkill((prev) => (prev === skillName ? null : skillName))
  }

  // Click outside handler
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setActiveSkill(null)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list' ref={wrapperRef}>
        {skills.map((skill) => (
          <li key={skill.name} className='skills__list-item logo-wrapper'>
            <button
              type='button'
              className='skill-logo-btn'
              onClick={() => handleClick(skill.name)}
              aria-label={`Show skill name for ${skill.name}`}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className='skill-logo'
              />
            </button>
            <span
              className={`tooltip ${
                activeSkill === skill.name ? 'tooltip--active' : ''
              }`}
            >
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
