import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { Button } from '../common/Button'
import { changeQuestion } from '../utils/helpers'

export const PrevQuestion = ({ text, className, component }) => {
  const [
    { prevQuestions, dataProvider, changeQuestionHandler },
    dispatch
  ] = useStore()

  const setCurrentQuestion = () => {
    const next = dataProvider.getNextQuestion(prevQuestions)
    const prev = dataProvider.getPrevQuestion(prevQuestions)
    changeQuestionHandler(prevQuestions)
    changeQuestion(prevQuestions, dispatch, next, prev)
    dispatch({
      type: 'setCurrentSection',
      payload: dataProvider.getSectionById(prevQuestions.sectionId)
    })
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
