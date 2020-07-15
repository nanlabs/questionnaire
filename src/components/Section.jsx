import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { changeQuestion } from '../utils/helpers'

export const Section = ({ label, id }) => {
  const [{ currentQuestions, questions, dataProvider }, dispatch] = useStore()

  const renderQuestionsBySection = () => {
    if (questions) {
      return questions
        .filter((q) => q.sectionId === id)
        .map((question) => (
          <p
            key={question.id + question.label}
            onClick={() =>
              changeQuestion(currentQuestions, question, dispatch, dataProvider)
            }
          >
            {question.label}
          </p>
        ))
    }
  }

  return (
    <div>
      <h2>{label}</h2>
      {currentQuestions && renderQuestionsBySection()}
    </div>
  )
}

export default Section
