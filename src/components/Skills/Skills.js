import { useState, useRef, useEffect } from 'react'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  const [activeSkill, setActiveSkill] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showCategoryNames, setShowCategoryNames] = useState(false)
  const wrapperRef = useRef(null)
  const sliderRef = useRef(null)
  const categories = ['All', ...skills.map(cat => ({ category: cat.category, short: cat.short }))]

  const handleClick = (skillName) => {
    setActiveSkill((prev) => (prev === skillName ? null : skillName))
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveSkill(null)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  useEffect(() => {
    const activeBtn = document.querySelector('.category-button.active')
    const slider = sliderRef.current

    if (activeBtn && slider) {
      const { offsetLeft, offsetWidth } = activeBtn
      slider.style.transform = `translateX(${offsetLeft}px)`
      slider.style.width = `${offsetWidth}px`
    }
  }, [selectedCategory])

  const renderTooltip = (skill) => (
    `${skill.name} • ${skill.progress ? skill.progress : ''}%`
  )

  const renderSkillItem = (skill) => (
    <li key={skill.name} className="skills__list-item">
      <div className = "logo-wrapper">
        <button
          type="button"
          className="skill-logo-btn"
          onClick={() => handleClick(skill.name)}
          aria-label={`Show skill name for ${skill.name}`}
          style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            '--progress': skill.progress,
          }}
        >
          {/* Farbiges Logo (nur unterer Teil sichtbar) */}
          <img
            src={skill.logo}
            alt={skill.name}
            className="skill-logo"
          />

          {/* Outline-Logo (nur oberer Teil sichtbar) */}
          <img
            src={skill.logo_outline || skill.logo}
            alt={`${skill.name} outline`}
            className="skill-logo-outline"
          />
        </button>

        <span className={`tooltip ${activeSkill === skill.name ? 'tooltip--active' : ''}`}>
          {renderTooltip(skill)}
        </span>
      </div>
    </li>
  )

  const renderSkills = () => {
    // Flat list: no category names
    if (selectedCategory === 'All' && !showCategoryNames) {
      return skills
        .flatMap(cat => cat.items)
        .map(renderSkillItem)
    }

    // Grouped by category
    return skills
      .filter(cat => selectedCategory === 'All' || cat.category === selectedCategory)
      .map(cat => (
        <div key={cat.category} className="skills-group">
          {(selectedCategory !== 'All' || showCategoryNames) && (
            <h4 className="skills-category-title">{cat.category}</h4>
          )}
          <div className="skills-list">
            {cat.items.map(renderSkillItem)}
          </div>
        </div>
      ))
  }

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills-section">
        <div className="skills-filter">
          <div className="category-bar">
            {categories.map((cat) => {
              const category = typeof cat === 'string' ? cat : cat.category
              const short = typeof cat === 'string' ? cat : cat.short

              return (
                <button
                  key={category}
                  type="button"
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                  title={category}
                >
                  {short}
                </button>
              )
            })}
            <div className="slider" ref={sliderRef} />
          </div>
        </div>

        <div className="skills-filter-header">
          {selectedCategory === 'All' && (
            <div className="toggle-cat-names">
              <label htmlFor="show-category-names">
                <input
                  type="checkbox"
                  id="show-category-names"
                  checked={showCategoryNames}
                  onChange={() => setShowCategoryNames(!showCategoryNames)}
                />
                Categories <strong>{showCategoryNames ? 'shown' : 'hidden'}</strong>
              </label>
            </div>
          )}
        </div>

        <div
          className={`skills__list ${!showCategoryNames && selectedCategory === 'All' ? 'flat-list' : ''}`}
          ref={wrapperRef}
        >
          <div className="skills-list-container">
          {renderSkills()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills