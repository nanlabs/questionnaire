import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import QuestionType from '../common/QuestionType'

export const Question = ({ className, children, components }) => {
  const [{ currentQuestions, dataProvider }] = useStore()

  if (!dataProvider.getLabel) return null

  const renderQuestion = () => {
    return (
      currentQuestions && (
        <QuestionType
          components={components}
          question={currentQuestions}
          key={`${currentQuestions.id}${currentQuestions.label}`}
        />
      )
    )
  }

  return (
    <div className={className}>
      {renderQuestion()}
      {children}
    </div>
  )
}
