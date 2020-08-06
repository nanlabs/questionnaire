import React, { useEffect } from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'

export const Questionnaire = ({
  children,
  className,
  dataProvider,
  changeQuestionHandler
}) => {
  const [, dispatch] = useStore()

  useEffect(() => {
    dispatch({ type: 'setDataProvider', payload: dataProvider })
  }, [dataProvider, dispatch])

  useEffect(() => {
    dispatch({ type: 'setSections', payload: dataProvider.getSections() })
  }, [dispatch])

  useEffect(() => {
    dispatch({
      type: 'setQuestions',
      payload: dataProvider.getQuestions()
    })
  }, [dataProvider])

  useEffect(() => {
    dispatch({
      type: 'setCurrentQuestions',
      payload: dataProvider.getQuestions()[0]
    })
  }, [dataProvider])

  useEffect(() => {
    dispatch({
      type: 'setCurrentSection',
      payload: dataProvider.getSections()[0]
    })
  }, [dataProvider])

  useEffect(() => {
    dispatch({
      type: 'setNextQuestions',
      payload: dataProvider.getNextQuestion(dataProvider.getQuestions()[0])
    })
  }, [dataProvider])

  useEffect(() => {
    dispatch({
      type: 'setPreviousQuestions',
      payload: dataProvider.getNextQuestion(dataProvider.getQuestions()[0])
    })
  }, [dataProvider])

  useEffect(() => {
    dispatch({
      type: 'setChangeQuestionHandler',
      payload: changeQuestionHandler
    })
  }, [changeQuestionHandler])

  return <span className={className}>{children}</span>
}

export default Questionnaire
