import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { Button } from '../common/Button'
import { setCurrentQuestion } from '../utils/helpers'

export const PrevQuestion = ({ text, className }) => {
  const [
    { prevQuestions, questions, currentQuestions, dataProvider },
    dispatch
  ] = useStore()
  return (
    <Button
      className={className}
      onClick={() =>
        setCurrentQuestion(
          dataProvider,
          prevQuestions,
          questions,
          dispatch,
          currentQuestions
        )
      }
      text={text}
    />
  )
}
