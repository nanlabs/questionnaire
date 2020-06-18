import React, { useEffect } from 'react'
import { useStore } from '../store/Store'
import { setCurrentQuestions } from '../helpers/questionsHelpers'

const Questions = ({ questionnaire, argSections, children }) => {
  const [{ questions, sections }, dispatch] = useStore()

  useEffect(() => {
    console.log('here')
    if ((!sections && argSections) || argSections !== sections) {
      dispatch({ type: 'setSections', payload: argSections })
    }
  }, [sections, dispatch, argSections])

  useEffect(() => {
    if (!questions || questions !== questionnaire) {
      dispatch({ type: 'setQuestions', payload: questionnaire })
      setCurrentQuestions(questionnaire[0], dispatch, questionnaire)
    }
  }, [questionnaire, questions, dispatch])

  return <div className='home-container'>{children}</div>
}

export default Questions
