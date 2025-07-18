import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import './ScrollToTop.css'

const ScrollToTop = ({ activeSection }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(activeSection !== 'about') // Nur sichtbar, wenn nicht auf der About-Seite
    }

    window.addEventListener('scroll', toggleVisibility)
    toggleVisibility()
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [activeSection])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top' aria-label='top'>
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
  ) : null
}

export default ScrollToTop
