import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { Button } from '../common/Button'
import { changeQuestion } from '../utils/helpers'

export const NextQuestion = ({ text, className }) => {
  const [{ nextQuestions }, dispatch] = useStore()

  const setCurrentQuestion = () => {
    changeQuestion(nextQuestions, dispatch)
  }
  if (!nextQuestions) return null

  return (
    <Button className={className} onClick={setCurrentQuestion} text={text} />
  )
}
