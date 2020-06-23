import React from 'react'
import { useStore } from '../store/Store'
import QuestionType from '../common/QuestionType'

const Question = ({ className, children }) => {
  const [{ currentQuestions }] = useStore()
  const renderQuestion = () => {
    return (
      currentQuestions &&
      currentQuestions.length &&
      currentQuestions.map((question) => (
        <QuestionType
          question={question}
          key={`${question.id}${question.label}`}
        />
      ))
    )
  }

  return (
    <div className={className}>
      {renderQuestion()}
      {children}
    </div>
  )
}

export default Question
