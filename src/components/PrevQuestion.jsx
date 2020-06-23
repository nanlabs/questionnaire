import React from 'react'
import { useStore } from '../store/Store'
import { Button } from '../common/Button'
import { setCurrentQuestion } from '../utils/helpers'

export const PrevQuestion = ({ text, className }) => {
  const [{ prevQuestions, questions, Questionnaire }, dispatch] = useStore()
  return (
    <Button
      className={className}
      onClick={() =>
        setCurrentQuestion(Questionnaire, prevQuestions, questions, dispatch)
      }
      text={text}
    />
  )
}
