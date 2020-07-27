import React from 'react'
import { useStore } from '../../Questionnaire/QuestionnaireContext'
import { selectOption } from '../../utils/helpers'

const SelectType = ({ className, question, label }) => {
  const [{ dataProvider }, dispatch] = useStore()

  const onChange = (event) => {
    const option = dataProvider
      .getOptions(question)
      .find(
        (option) => dataProvider.getOptionLabel(option) === event.target.value
      )
    selectOption(option, dataProvider, dispatch)
  }

  return (
    <div className={className}>
      <h3>{label}</h3>
      <select name='options' onChange={onChange}>
        {dataProvider.getOptions(question).map((option) => {
          const label = dataProvider.getOptionLabel(option)

          return (
            <option
              key={label}
              value={label}
              label={label}
              onSelect={() => selectOption(option, dataProvider, dispatch)}
            />
          )
        })}
      </select>
    </div>
  )
}

export default SelectType
