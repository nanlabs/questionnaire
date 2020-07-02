import React from 'react'
import { useStore } from '../Questionnaire/Questionnaire'
import { Button } from '../common/Button'
import { setCurrentQuestion } from '../utils/helpers'

export const PrevQuestion = ({ text, className }) => {
  const [
    { prevQuestions, questions, currentQuestions, Questionnaire },
    dispatch
  ] = useStore()
  return (
    <Button
      className={className}
      onClick={() =>
        setCurrentQuestion(
          Questionnaire,
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
