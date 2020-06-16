import React from 'react'
import { useStore } from '../store/Store'
import { setNextQuestion } from '../helpers/questionsHelpers'

const Checkbox = () => {
  const [{ currentQuestion, questions }, dispatch] = useStore()

  return (
    <div className='checkbox-container'>
      <h3>{currentQuestion.label}</h3>
      {currentQuestion.options.map((option) => (
        <span key={option.label}>
          <label htmlFor={option.label} />
          {option.label}
          <input
            name={option.label}
            type={currentQuestion.type}
            onChange={() =>
              setNextQuestion(option.nextQuestion, dispatch, questions)
            }
          />
        </span>
      ))}
    </div>
  )
}

export default Checkbox
