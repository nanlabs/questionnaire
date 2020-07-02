import React from 'react'
import { useStore } from '../../Questionnaire/Questionnaire'
import { setNextQuestion } from '../../utils/helpers'

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
              setNextQuestion(Questionnaire, option, questions, dispatch)
            }
          />
        </span>
      ))}
    </div>
  )
}

export default Checkbox
