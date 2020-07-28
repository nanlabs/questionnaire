import React from 'react'
import { useStore } from '../../Questionnaire/QuestionnaireContext'
import { selectOption } from '../../utils/helpers'

const RadioTypeQuestion = ({ question, className }) => {
  const [{ dataProvider }, dispatch] = useStore()
  if(!dataProvider.getLabel) return null 

  return (
    <div className={className}>
      <h3>{dataProvider.getLabel(question)}</h3>
      {dataProvider.getOptions(question).map((option) => {
        const label = dataProvider.getOptionLabel(option)
        return (
          <span key={label}>
            <label htmlFor={label}>{label}</label>
            <input
              type='radio'
              name={label}
              value={label}
              onChange={() => selectOption(option, dataProvider, dispatch)}
            />
          </span>
        )
      })}
    </div>
  )
}

export default RadioTypeQuestion
