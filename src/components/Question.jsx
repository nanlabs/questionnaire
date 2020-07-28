import React, { useEffect } from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import QuestionType from '../common/QuestionType'

export const Question = ({ className, children, components }) => {
  const [{ currentQuestions, dataProvider }, dispatch] = useStore()

  if (!dataProvider.getLabel) return null

  useEffect(() => {
    dispatch({
      type: 'setNextQuestions',
      payload: dataProvider.getNextQuestion(currentQuestions)
    })
  }, [dataProvider, currentQuestions])

  useEffect(() => {
    dispatch({
      type: 'setPrevQuestions',
      payload: dataProvider.getPrevQuestion(currentQuestions)
    })
  }, [dataProvider, currentQuestions])

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
