import React, { useEffect } from 'react'
import './Home.css'
import { useStore } from '../store/Store'

const Questions = ({ questionnaire, sectiones, children }) => {
  const [{ currentQuestion, questions, sections }, dispatch] = useStore()

  console.log(questionnaire)
  useEffect(() => {
    if ((!sections && sectiones) || sectiones !== sections) {
      dispatch({ type: 'setSections', payload: sectiones })
    }
  }, [sections, dispatch, sectiones])

  useEffect(() => {
    if (!questions || questions !== questionnaire) {
      dispatch({ type: 'setQuestions', payload: questionnaire })
      dispatch({ type: 'setCurrentQuestion', payload: questionnaire[0] })
    }
  }, [questionnaire, questions, dispatch])

  return <div className='home-container'>{children}</div>
}

export default Questions
