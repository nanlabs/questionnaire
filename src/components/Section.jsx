import React from 'react'
import { useStore } from '../store/Store'
import { setCurrentQuestions } from '../helpers/questionsHelpers'

const Section = ({ label, id }) => {
  const [{ currentQuestions, questions }, dispatch] = useStore()

  const renderQuestionsBySection = () => {
    if (questions) {
      const currentSectionQuestions = questions.filter(
        (q) => q.sectionId === id
      )
      return currentSectionQuestions.map((question) => (
        <p
          key={question.id + question.label}
          style={
            currentQuestions[0].id === question.id ? { fontWeight: 'bold' } : {}
          }
          onClick={() => setCurrentQuestions(question, dispatch, questions)}
        >
          {question.label}
        </p>
      ))
    }
  }

  return (
    <div>
      <h2>{label}</h2>
      {renderQuestionsBySection()}
    </div>
  )
}

export default Section
