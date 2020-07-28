import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'

export const Section = ({
  label,
  id,
  questions,
  questionQuantity,
  clickQuestionHandler,
  clickSectionHandler,
  simpleSection
}) => {
  const [{ dataProvider }] = useStore()

  const handleQuestionClick = (event) => {
    const questionId = event.target.dataset.key
    clickQuestionHandler(questionId)
  }

  const handleSectionClick = () => {
    clickSectionHandler(id)
  }

  const renderQuestionsBySection = () => {
    if (questions) {
      return questions.map((question) => (
        <p
          key={question.id}
          onClick={handleQuestionClick}
          data-key={question.id}
        >
          {dataProvider.getLabel(question)}
        </p>
      ))
    }
  }

  return (
    <div>
      <h2 onClick={handleSectionClick}>{label} - {questionQuantity}</h2>
      {dataProvider.getLabel && !simpleSection && renderQuestionsBySection()}
    </div>
  )
}

export default Section
