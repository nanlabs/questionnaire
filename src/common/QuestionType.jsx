import React from 'react'
import CheckBox from './inputTypes/CheckboxType'
import Text from './inputTypes/TextType'
import Radio from './inputTypes/RadioType'
import Select from './inputTypes/SelectType'
import TextArea from './inputTypes/TextAreaType'
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

const QuestionType = ({ question, className, components }) => {
  const [{ dataProvider }] = useStore()
  if (!question && !components) return null
  if (!dataProvider.getLabel) return null

  let TypeComponent

  if (question.type === 'multiple') {
    debugger
    return question.fields.map((field) => {
      TypeComponent = conditionalRender(components, field)

      return (
        <TypeComponent
          dataProvider={dataProvider}
          question={field}
          className={className}
          label={field.label}
          key={field.label}
        />
      )
    })
  } else {
    TypeComponent = conditionalRender(components, question)

    return (
      <TypeComponent
        dataProvider={dataProvider}
        question={question}
        className={className}
        label={question.label}
      />
    )
  }
}

export default QuestionType
