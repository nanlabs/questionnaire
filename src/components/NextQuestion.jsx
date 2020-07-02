import React from 'react'
import { useStore } from '../Questionnaire/Questionnaire'
import { Button } from '../common/Button'
import { setCurrentQuestion } from '../utils/helpers'

export const NextQuestion = ({ text, className }) => {
  const [
    { questions, nextQuestions, currentQuestions, Questionnaire },
    dispatch
  ] = useStore()
  return (
    <Button
      className={className}
      onClick={() =>
        setCurrentQuestion(
          Questionnaire,
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
