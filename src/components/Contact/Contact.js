import { useState } from 'react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  if (!contact.email) return null

  const copyEmailToClipboard = (e) => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Show message for 2 seconds
    e.currentTarget.blur() // This removes focus from the button
  }

  return (
    <section className='section contact center' id='contact'  data-aos="fade-up">
      <h2 className='section__title'>Contact</h2>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            📧 Email me
          </span>
        </a>

        <div style={{ position: 'relative' }}>
          <button
            type='button'
            className='btn btn--outline'
            onClick={copyEmailToClipboard}
          >
            📋 Copy Email
          </button>
          {copied && (
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.8rem',
                color: 'green',
              }}
            >
              ✔ Copied!
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
