import React from 'react'
import { useStore } from '../store/Store'
import { setNextQuestion } from '../helpers/questionsHelpers'

const SelectType = () => {
  const [{ currentQuestion, questions }, dispatch] = useStore()

  const onChange = (event) => {
    const option = currentQuestion.options.find(
      (option) => option.label === event.target.value
    )
    setNextQuestion(option.nextQuestion, dispatch, questions)
  }

  return (
    <div className='select-container'>
      <h3>{currentQuestion.label}</h3>
      <select name={'options'} onChange={onChange}>
        {currentQuestion.options.map((option) => (
          <option
            key={option.label}
            value={option.label}
            label={option.label}
            onSelect={() =>
              setNextQuestion(option.nextQuestion, dispatch, questions)
            }
          />
        ))}
      </select>
    </div>
  )
}

export default SelectType
