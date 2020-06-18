import React from 'react'
import { Store } from './store/Store'
import SingleQuestion from './components/Question'
import NavBar from './components/Nav'
import { NextQuestion } from './components/NextQuestion'
import { PrevQuestion } from './components/PrevQuestion'

export const Next = ({ text, style }) => {
  return <NextQuestion text={text} style={style} />
}

export const Back = ({ text, style }) => {
  return <PrevQuestion text={text} style={style} />
}

export const Question = ({ styles, children }) => {
  return <SingleQuestion styles={styles}>{children}</SingleQuestion>
}
export const Questionnaire = ({
  questions,
  question,
  sections,
  children,
  styles
}) => {
  return (
    <Store questionnaire={questions} question={question} sections={sections}>
      <div style={styles}>{children}</div>
    </Store>
  )
}

export const Nav = ({ style }) => {
  return <NavBar style={style} />
}
