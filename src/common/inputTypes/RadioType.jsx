import React from 'react'
import { useStore } from '../../store/Store'

const RadioTypeQuestion = ({ question, className }) => {
  const [{ questions, Questionnaire }, dispatch] = useStore()

  return (
    <div className={className}>
      <h3>{question.label}</h3>
      {question.options.map((option) => (
        <span key={option.label}>
          <label htmlFor={option.label}>{option.label}</label>
          <input
            type='radio'
            name={option.label}
            value={option.label}
            onChange={() =>
              Questionnaire.setNextQuestions(
                option.nextQuestion,
                dispatch,
                questions
              )
            }
          />
        </span>
      ))}
    </div>
  )
}

export default RadioTypeQuestion
