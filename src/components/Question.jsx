import React from 'react'
import { useStore } from '../store/Store'
import QuestionType from '../helpers/QuestionType'
import { setCurrentQuestion } from '../helpers/questionsHelpers'

const Question = () => {
  const [
    { currentQuestion, nextQuestion, prevQuestion, questions },
    dispatch
  ] = useStore()
  console.log(currentQuestion)
  return (
    <div className='question-container'>
      <QuestionType question={currentQuestion} />
      <span>
        <button
          className='button'
          onClick={() => setCurrentQuestion(prevQuestion, dispatch, questions)}
        >
          Back
        </button>
        <button
          className='button'
          onClick={() => setCurrentQuestion(nextQuestion, dispatch, questions)}
        >
          Next
        </button>
      </span>
    </div>
  )
}

export default Question
