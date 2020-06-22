import React, { useEffect } from 'react'
import { useStore } from '../store/Store'

const Questions = ({
  questionnaire,
  argSections,
  children,
  questionsHandler
}) => {
  const [{ questions, sections }, dispatch] = useStore()

  useEffect(() => {
    dispatch({ type: 'setQuestionnaire', payload: questionsHandler })
  }, [questionsHandler])

  useEffect(() => {
    if ((!sections && argSections) || argSections !== sections) {
      dispatch({ type: 'setSections', payload: argSections })
    }
  }, [sections, dispatch, argSections])

  useEffect(() => {
    if (!questions || questions !== questionnaire) {
      dispatch({ type: 'setQuestions', payload: questionnaire })
      questionsHandler.setCurrentQuestions(
        questionnaire[0],
        dispatch,
        questionnaire
      )
    }
  }, [questionnaire, questions, dispatch])

  return <span>{children}</span>
}

export default Questions
