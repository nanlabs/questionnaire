import React from 'react'
import { useStore } from '../store/Store'
import { setCurrentQuestions } from '../helpers/questionsHelpers'
import { Button } from '../common/Button'

export const PrevQuestion = ({ text, style }) => {
  const [{ prevQuestions, questions }, dispatch] = useStore()
  return (
    <Button
      style={style}
      onClick={() => setCurrentQuestions(prevQuestions, dispatch, questions)}
      text={text}
    />
  )
}
