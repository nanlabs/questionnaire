import React from 'react'
import { useStore } from '../store/Store'
import { setNextQuestion } from '../helpers/questionsHelpers'

const RadioTypeQuestion = () => {
  const [{ currentQuestion, questions }, dispatch] = useStore()

  return (
    <div className=''>
      <h3>{currentQuestion.label}</h3>
      {currentQuestion.options.map((option) => (
        <span key={option.label}>
          <label htmlFor={option.label}>{option.label}</label>
          <input
            type='radio'
            name={option.label}
            value={option.label}
            onChange={() =>
              setNextQuestion(option.nextQuestion, dispatch, questions)
            }
          />
        </span>
      ))}
    </div>
  )
}

export default RadioTypeQuestion
