import React from 'react'
import Section from './Section'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { changeQuestion } from '../utils/helpers'

export const Nav = ({ className, component, simpleNav }) => {
  const [{ sections, dataProvider, currentSection }, dispatch] = useStore()

  const handleQuestionClick = (questionId) => {
    const question = dataProvider.getQuestionById(questionId)
    const next = dataProvider.getNextQuestion(question)
    const prev = dataProvider.getPrevQuestion(question)
    changeQuestion(question, dispatch, next, prev)
  }

  const handleSectionClick = (sectionId) => {
    const section = dataProvider.getSectionById(sectionId)
    const question = dataProvider.getSectionFirstQuestion(section)
    const next = dataProvider.getNextQuestion(question)
    const prev = dataProvider.getPrevQuestion(question)
    changeQuestion(question, dispatch, next, prev)

    dispatch({
      type: 'setCurrentSection',
      payload: section
    })
  }

  const SectionComponent = component || Section
  return (
    <div className={className}>
      {sections &&
        dataProvider &&
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
            section={section}
            isActive={section.id === currentSection.id}
          />
        ))}
    </div>
  )
}

export default Nav
