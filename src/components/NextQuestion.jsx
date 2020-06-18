import React from 'react'
import { useStore } from '../store/Store'
import { setCurrentQuestions } from '../helpers/questionsHelpers'
import { Button } from '../common/Button'

export const NextQuestion = ({ text, style }) => {
  const [{ nextQuestions, questions }, dispatch] = useStore()
  return (
    <Button
      style={style}
      onClick={() => setCurrentQuestions(nextQuestions, dispatch, questions)}
      text={text}
    />
  )
}
