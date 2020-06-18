import React from 'react'
import { useStore } from '../store/Store'
import { setNextQuestions } from '../helpers/questionsHelpers'

const SelectType = ({ style }) => {
  const [{ currentQuestion, questions }, dispatch] = useStore()

  const onChange = (event) => {
    const option = currentQuestion.options.find(
      (option) => option.label === event.target.value
    )
    setNextQuestions(option.nextQuestion, dispatch, questions)
  }

  return (
    <div style={style}>
      <h3>{currentQuestion.label}</h3>
      <select name={'options'} onChange={onChange}>
        {currentQuestion.options.map((option) => (
          <option
            key={option.label}
            value={option.label}
            label={option.label}
            onSelect={() =>
              setNextQuestions(option.nextQuestion, dispatch, questions)
            }
          />
        ))}
      </select>
    </div>
  )
}

export default SelectType
