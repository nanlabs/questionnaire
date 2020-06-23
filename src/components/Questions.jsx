import React, { useEffect } from 'react'
import { useStore } from '../store/Store'
import { setCurrentQuestion } from '../utils/helpers'

const Questions = ({
  questionnaire,
  argSections,
  children,
  questionsHandler
}) => {
  const [{ questions, sections }, dispatch] = useStore()

  // dispatch({ type: 'clear' })
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
      setCurrentQuestion(
        questionsHandler,
        questionnaire[0],
        questionnaire,
        dispatch
      )
    }
  }, [questionnaire, questions])

  return <span>{children}</span>
}

export default Questions
