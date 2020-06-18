import React from 'react'
import { useStore } from '../store/Store'
import QuestionType from '../helpers/QuestionType'

const Question = ({ styles, children }) => {
  const [{ currentQuestions }] = useStore()
  const renderQuestion = () => {
    return (
      currentQuestions &&
      currentQuestions.length &&
      currentQuestions.map((question) => (
        <QuestionType question={question} style={styles} />
      ))
    )
  }

  return (
    <div>
      {renderQuestion()}
      {children}
    </div>
  )
}

export default Question
