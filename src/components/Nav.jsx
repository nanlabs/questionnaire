import React from 'react'
import Section from './Section'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { changeQuestion } from '../utils/helpers'

export const Nav = ({ className, component, simpleNav }) => {
  const [{ sections, dataProvider }, dispatch] = useStore()

  const handleQuestionClick = (questionId) => {
    const question = dataProvider.getQuestionById(questionId)
    changeQuestion(question, dispatch)
  }

  const handleSectionClick = (sectionId) => {
    const section = dataProvider.getSectionById(sectionId)
    const question = dataProvider.getSectionFirstQuestion(section)
    changeQuestion(question, dispatch)
  }

  const SectionComponent = component || Section
  return (
    <div className={className}>
      {sections &&
        dataProvider.getQuestionsBySection &&
        sections.map((section) => (
          <SectionComponent
            key={section.id}
            id={section.id}
            label={section.label}
            questions={dataProvider.getQuestionsBySection(section)}
            questionQuantity={dataProvider.getQuestionQuantityForSection(
              section
            )}
            clickQuestionHandler={handleQuestionClick}
            clickSectionHandler={handleSectionClick}
            simpleSection={simpleNav}
          />
        ))}
    </div>
  )
}

export default Nav
