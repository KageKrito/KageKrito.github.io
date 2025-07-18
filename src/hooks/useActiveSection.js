import { useEffect, useState } from 'react'

const sectionIds = ['about', 'projects', 'skills', 'contact']

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.5, // 50% sichtbar
    })

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}