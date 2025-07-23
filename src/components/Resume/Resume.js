import './Resume.css'
import { about } from '../../portfolio'

const Resume = () => {
    const { resume } = about

    return (
    <section className='resume-section'>
    <h2 className='resume-title' >Resume</h2>
    <div className='resume-content'>
        {resume}
    </div>
    </section>
)}

export default Resume
