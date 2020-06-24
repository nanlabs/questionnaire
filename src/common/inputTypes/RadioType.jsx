import React from 'react'
import { useStore } from '../../store/Store'
import { setNextQuestion } from '../../utils/helpers'

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
              setNextQuestion(Questionnaire, option, questions, dispatch)
            }
          />
        </span>
      ))}
    </div>
  )
}

export default RadioTypeQuestion
