import React from 'react'
import { useStore } from '../../store/Store'

const Checkbox = ({ question, className }) => {
  const [{ questions, Questionnaire }, dispatch] = useStore()

  return (
    <div className={className}>
      <h3>{question.label}</h3>
      {question.options.map((option) => (
        <span key={option.label}>
          <label htmlFor={option.label} />
          {option.label}
          <input
            name={option.label}
            type={question.type}
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

export default Checkbox
