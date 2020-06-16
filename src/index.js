import React from 'react'
import { Store } from './store/Store'
import SingleQuestion from './components/Question'

export const Question = () => {
  return <SingleQuestion />
}
export const Questionnaire = ({ questions, question, children }) => {
  return (
    <Store questionnaire={questions} question={question}>
      <div>{children}</div>
    </Store>
  )
}
