import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './FunProjectContainer.css'

const FunProjectContainer = ({ funproject }) => (
  <div className='funproject'>
    <h3>{funproject.name}</h3>

    <div className='funproject__description'>{funproject.description}</div>
    {funproject.stack && (
      <ul className='funproject__stack'>
        {funproject.stack.map((item) => (
          <li key={uniqid()} className='funproject__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {funproject.sourceCode && (
      <a
        href={funproject.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {funproject.livePreview && (
      <a
        href={funproject.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default FunProjectContainer
