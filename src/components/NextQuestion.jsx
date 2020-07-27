import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { Button } from '../common/Button'
import { changeQuestion } from '../utils/helpers'

export const NextQuestion = ({ text, className, component }) => {
  const [{ nextQuestions }, dispatch] = useStore()

  const setCurrentQuestion = () => {
    changeQuestion(nextQuestions, dispatch)
  }
  if (!nextQuestions) return null

  const ButtonComponent = component || Button

  return (
    <ButtonComponent
      className={className}
      onClick={setCurrentQuestion}
      handleClick={setCurrentQuestion}
      text={text}
    />
  )
}
