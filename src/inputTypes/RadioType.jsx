import React from 'react'
import { useStore } from '../store/Store'
import { setNextQuestions } from '../helpers/questionsHelpers'

const RadioTypeQuestion = ({ question, style }) => {
  const [{ questions }, dispatch] = useStore()

  return (
    <div style={style}>
      <h3>{question.label}</h3>
      {question.options.map((option) => (
        <span key={option.label}>
          <label htmlFor={option.label}>{option.label}</label>
          <input
            type='radio'
            name={option.label}
            value={option.label}
            onChange={() =>
              setNextQuestions(option.nextQuestion, dispatch, questions)
            }
          />
        </span>
      ))}
    </div>
  )
}

export default RadioTypeQuestion
