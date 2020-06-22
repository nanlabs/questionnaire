import React from 'react'
import { useStore } from '../store/Store'
import { Button } from '../common/Button'

export const NextQuestion = ({ text, className }) => {
  const [{ nextQuestions, questions, Questionnaire }, dispatch] = useStore()
  return (
    <Button
      className={className}
      onClick={() =>
        Questionnaire.setCurrentQuestions(nextQuestions, dispatch, questions)
      }
      text={text}
    />
  )
}
