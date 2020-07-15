import React from 'react'
import { useStore } from '../../Questionnaire/QuestionnaireContext'
import { selectOption } from '../../utils/helpers'

const Checkbox = ({ question, label, className }) => {
  const [{ dataProvider }, dispatch] = useStore()
   
  if (!dataProvider.getLabel) return null
  return (
    dataProvider.getLabel && (
      <div className={className}>
        <h3>{label}</h3>
        {dataProvider.getOptions(question).map((option) => {
          const label = option.label
          return (
            <span key={label}>
              <label htmlFor={label} />
              {label}
              <input
                name={label}
                type='checkbox'
                onChange={() => selectOption(option, dataProvider, dispatch)}
              />
            </span>
          )
        })}
      </div>
    )
  )
}

export default Checkbox
