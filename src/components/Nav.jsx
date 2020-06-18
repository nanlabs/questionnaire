import React from 'react'
import Section from './Section'
import { useStore } from '../store/Store'

const Nav = ({ style }) => {
  const [{ sections }] = useStore()
  return (
    <div style={style}>
      {sections &&
        sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            questions={section.Questions}
            label={section.label}
          />
        ))}
    </div>
  )
}

export default Nav
