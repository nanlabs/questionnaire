import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { Button } from '../common/Button'
import { setCurrentQuestion } from '../utils/helpers'

export const NextQuestion = ({ text, className }) => {
  const [
    { questions, nextQuestions, currentQuestions, dataProvider },
    dispatch
  ] = useStore()
  return (
    <Button
      className={className}
      onClick={() =>
        setCurrentQuestion(
          dataProvider,
          nextQuestions,
          questions,
          dispatch,
          currentQuestions
        )
      }
      text={text}
    />
  )
}
