import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = ({ showResume, setShowResume }) => {
  const { name, role, description, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I&apos;m <span className='about__name'>{name},</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <div className='about__desc'>{description && description}</div>

      <div className='about__contact center'>
        <button type='button' onClick={() => setShowResume(prev => !prev)} className='btn btn--outline'>
          {showResume ? 'Close Resume' : 'Resume'}
        </button>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
