import React from 'react'
import CheckBox from './inputTypes/CheckboxType'
import Text from './inputTypes/TextType'
import Radio from './inputTypes/RadioType'
import Select from './inputTypes/SelectType'
import TextArea from './inputTypes/TextAreaType'
import { setNextQuestion } from '../utils/helpers'
import { useStore } from '../Questionnaire/QuestionnaireContext'

const QuestionTypes = {
  checkbox: CheckBox,
  text: Text,
  radio: Radio,
  textArea: TextArea,
  select: Select
}

const conditionalRender = (components, question) => {
  return components && components[question.type]
    ? components[question.type]
    : QuestionTypes[question.type]
}

const Question = ({ question, className, components }) => {
  const [{ questions, dataProvider }, dispatch] = useStore()
  console.log(dataProvider)
  if (!question || (!QuestionTypes[question.type] && !components)) return null
  const TypeComponent = conditionalRender(components, question)
  return (
    <TypeComponent
      getOptions={dataProvider.getOptions}
      question={question}
      questions={questions}
      className={className}
      setNextQuestion={(option) =>
        setNextQuestion(dataProvider, option, questions, dispatch)
      }
    />
  )
}

export default Question
