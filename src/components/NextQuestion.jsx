import React from 'react'
import { useStore } from '../store/Store'
import { Button } from '../common/Button'
import { setCurrentQuestion } from '../utils/helpers'

export const NextQuestion = ({ text, className }) => {
  const [{ questions, nextQuestions, Questionnaire }, dispatch] = useStore()
  console.log(nextQuestions)
  return (
    <Button
      className={className}
      onClick={() =>
        setCurrentQuestion(Questionnaire, nextQuestions, questions, dispatch)
      }
      text={text}
    />
  )
}
