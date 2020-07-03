import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import QuestionType from '../common/QuestionType'

export const Question = ({ className, children, components }) => {
  const [{ currentQuestions }] = useStore()
  const renderQuestion = () => {
    return (
      currentQuestions &&
      currentQuestions.length &&
      currentQuestions.map((question) => (
        <QuestionType
          components={components}
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
