import React from 'react'
import { Store } from './store/Store'
import SingleQuestion from './components/Question'
import NavBar from './components/Nav'
import { NextQuestion } from './components/NextQuestion'
import { PrevQuestion } from './components/PrevQuestion'
import SingleSection from './components/Section'

export const Next = ({ text, className }) => {
  return <NextQuestion text={text} className={className} />
}

export const Back = ({ text, style, className }) => {
  return <PrevQuestion text={text} style={style} className={className} />
}

export const Question = ({ className, children }) => {
  return <SingleQuestion className={className}>{children}</SingleQuestion>
}
export const Questionnaire = ({
  questions,
  question,
  sections,
  children,
  questionsHandler,
  className
}) => {
  return (
    <Store
      questionnaire={questions}
      question={question}
      sections={sections}
      questionsHandler={questionsHandler}
    >
      <div className={className}>{children}</div>
    </Store>
  )
}

export const Nav = ({ className }) => {
  return <NavBar className={className} />
}

export const Section = ({ className }) => {
  return <SingleSection className={className} />
}
