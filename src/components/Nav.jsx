import React from 'react'
import Section from './Section'
import { useStore } from '../Questionnaire/QuestionnaireContext'

export const Nav = ({ className, children }) => {
  const [{ sections }] = useStore()

  return (
    <div className={className}>
      {children}
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
