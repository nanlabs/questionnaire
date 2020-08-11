import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { Button } from '../common/Button'
import { changeQuestion } from '../utils/helpers'

export const NextQuestion = ({ text, className, component }) => {
  const [
    { nextQuestions, dataProvider, changeQuestionHandler },
    dispatch
  ] = useStore()

  const setCurrentQuestion = () => {
    const next = dataProvider.getNextQuestion(nextQuestions)
    const prev = dataProvider.getPrevQuestion(nextQuestions)
    changeQuestion(nextQuestions, dispatch, next, prev)
    dispatch({
      type: 'setCurrentSection',
      payload: dataProvider.getSectionById(nextQuestions.sectionId)
    })
  }
  if (!nextQuestions) return null

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
