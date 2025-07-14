import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={skill.name} className='skills__list-item logo-wrapper'>
            <img
              src={skill.logo}
              alt={skill.name}
              className='skill-logo'
            />
            <span className='tooltip'>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
