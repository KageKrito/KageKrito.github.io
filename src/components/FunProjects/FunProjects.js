import uniqid from 'uniqid'
import { funProjects } from '../../portfolio'
import FunProjectContainer from '../FunProjectContainer/FunProjectContainer'
import './FunProjects.css'

const FunProjects = () => {
  if (!funProjects.length) return null

  return (
    <section id='funprojects' className='section projects'>
      <h2 className='section__title'>Fun Projects</h2>

      <div className='funprojects__grid'>
        {funProjects.map((project) => (
          <div 
            key={uniqid()}
            id={project.name.toLowerCase().replace(/\s+/g, '-')}
            className='funprojects-wrapper'
          >
            <FunProjectContainer funproject={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FunProjects
