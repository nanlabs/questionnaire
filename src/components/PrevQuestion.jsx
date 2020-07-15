import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { Button } from '../common/Button'
import { changeQuestion } from '../utils/helpers'

export const PrevQuestion = ({ text, className }) => {
  const [{ prevQuestions }, dispatch] = useStore()

  const setCurrentQuestion = () => {
    changeQuestion(prevQuestions, dispatch)
  }
  if (!prevQuestions) return null
  return (
    <Button className={className} onClick={setCurrentQuestion} text={text} />
  )
}
