import React from 'react'
import { useStore } from '../store/Store'

const Section = ({ label, id }) => {
  const [{ currentQuestions, questions, Questionnaire }, dispatch] = useStore()

  const isActive = (question) => {
    return currentQuestions[0].id === question.id ? { fontWeight: 'bold' } : {}
  }

  const renderQuestionsBySection = () => {
    if (questions) {
      return questions
        .filter((q) => q.sectionId === id)
        .map((question) => (
          <p
            key={question.id + question.label}
            style={isActive(question)}
            onClick={() =>
              Questionnaire.setCurrentQuestions(question, dispatch, questions)
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
