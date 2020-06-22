import React from 'react'
import { useStore } from '../store/Store'
import { Button } from '../common/Button'

export const PrevQuestion = ({ text, className }) => {
  const [{ prevQuestions, questions, Questionnaire }, dispatch] = useStore()
  return (
    <Button
      className={className}
      onClick={() =>
        Questionnaire.setCurrentQuestions(prevQuestions, dispatch, questions)
      }
      text={text}
    />
  )
}
