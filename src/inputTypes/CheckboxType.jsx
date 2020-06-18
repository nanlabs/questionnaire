import React from 'react'
import { useStore } from '../store/Store'
import { setNextQuestions } from '../helpers/questionsHelpers'

const Checkbox = ({ question, style }) => {
  const [{ questions }, dispatch] = useStore()

  return (
    <div style={style}>
      <h3>{question.label}</h3>
      {question.options.map((option) => (
        <span key={option.label}>
          <label htmlFor={option.label} />
          {option.label}
          <input
            name={option.label}
            type={question.type}
            onChange={() =>
              setNextQuestions(option.nextQuestion, dispatch, questions)
            }
          />
        </span>
      ))}
    </div>
  )
}

export default Checkbox
