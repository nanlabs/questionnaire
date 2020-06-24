import React from 'react'
import { useStore } from '../../store/Store'
import { setNextQuestion } from '../../utils/helpers'

const SelectType = ({ className }) => {
  const [{ currentQuestion, questions, Questionnaire }, dispatch] = useStore()

  const onChange = (event) => {
    const option = currentQuestion.options.find(
      (option) => option.label === event.target.value
    )
    setNextQuestions(option.nextQuestion, dispatch, questions)
  }

  return (
    <div className={className}>
      <h3>{currentQuestion.label}</h3>
      <select name={'options'} onChange={onChange}>
        {currentQuestion.options.map((option) => (
          <option
            key={option.label}
            value={option.label}
            label={option.label}
            onSelect={() =>
              setNextQuestion(Questionnaire, option, questions, dispatch)
            }
          />
        ))}
      </select>
    </div>
  )
}

export default SelectType
