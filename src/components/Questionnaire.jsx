import React, { useEffect } from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'

export const Questionnaire = ({ children, className, dataProvider }) => {
  const [{ questions, sections }, dispatch] = useStore()

  useEffect(() => {
    dispatch({ type: 'setDataProvider', payload: dataProvider })
  }, [dataProvider, dispatch])

  useEffect(() => {
    dispatch({ type: 'setSections', payload: dataProvider.getSections() })
  }, [sections, dispatch])

  useEffect(() => {
    dispatch({
      type: 'setCurrentQuestions',
      payload: dataProvider.getQuestions()[0]
    })
  }, [dataProvider, questions])

  useEffect(() => {
    dispatch({
      type: 'setNextQuestions',
      payload: dataProvider.getNextQuestion(dataProvider.getQuestions()[0])
    })
  }, [dataProvider, questions])

  return <span className={className}>{children}</span>
}

export default Questionnaire
