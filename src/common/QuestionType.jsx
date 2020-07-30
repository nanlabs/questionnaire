import React from 'react'
import CheckBox from './inputTypes/CheckboxType'
import Text from './inputTypes/TextType'
import Radio from './inputTypes/RadioType'
import Select from './inputTypes/SelectType'
import TextArea from './inputTypes/TextAreaType'
import { useStore } from '../Questionnaire/QuestionnaireContext'
import { selectOption } from '../utils/helpers'

const QuestionTypes = {
  checkbox: CheckBox,
  text: Text,
  radio: Radio,
  textArea: TextArea,
  select: Select
}

const conditionalRender = (components, type) => {
  return components && components[type] ? components[type] : QuestionTypes[type]
}

const QuestionType = ({ question, components }) => {
  const [{ dataProvider }, dispatch] = useStore()
  if (!question && !components) return null
  if (!dataProvider.getLabel) return null

  let TypeComponent

  const renderQuestion = (label, type, field, question) => {
    TypeComponent = conditionalRender(components, type)
    return (
      <TypeComponent
        label={label}
        selectOption={selectOptionHandler}
        field={field}
        question={question}
      />
    )
  }

  const selectOptionHandler = (event) => {
    const label = event.target.name
    const option = dataProvider.getOptionFromLabel(label, question)
    if (dataProvider.getNextQuestionFromOption(option)) {
      const nextQuesition = dataProvider.getNextQuestionFromOption(option)
      selectOption(nextQuesition, dataProvider, dispatch)
    }
  }

  if (question.type === 'multiple') {
    const fields = dataProvider.getFields(question)
    return fields.map((field) => {
      return renderQuestion(
        dataProvider.getFieldLabel(field),
        dataProvider.getFieldType(field),
        field,
        question
      )
    })
  } else {
    return renderQuestion(
      dataProvider.getLabel(question),
      dataProvider.getType(question),
      question
    )
  }
}

export default QuestionType
