import React from 'react'
import { useStore } from '../../Questionnaire/QuestionnaireContext'
import { selectOption } from '../../utils/helpers'

const RadioTypeQuestion = ({ label, options, className, selectOption }) => {

  return (
    <div className={className}>
      <h3>{label}</h3>
      {options.map((option) => {
        return (
          <span key={label}>
            <label htmlFor={option}>{option}</label>
            <input
              type='radio'
              name={option}
              value={option}
              onChange={selectOption}
            />
          </span>
        )
      })}
    </div>
  )
}

export default RadioTypeQuestion
