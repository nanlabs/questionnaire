import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { Button } from '../common/Button'
import { changeQuestion } from '../utils/helpers'

export const PrevQuestion = ({ text, className, component }) => {
  const [{ prevQuestions }, dispatch] = useStore()

  const setCurrentQuestion = () => {
    changeQuestion(prevQuestions, dispatch)
  }
  if (!prevQuestions) return null
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
