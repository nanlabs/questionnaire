import React from 'react'
import { useStore } from '../../Questionnaire/QuestionnaireContext'
import { setNextQuestion } from '../../utils/helpers'

const RadioTypeQuestion = ({ question, className }) => {
  const [{ questions, dataProvider }, dispatch] = useStore()

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
              setNextQuestion(dataProvider, option, questions, dispatch)
            }
          />
        </span>
      ))}
    </div>
  )
}

export default RadioTypeQuestion
