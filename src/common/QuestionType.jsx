import React from 'react'
import CheckBox from './inputTypes/CheckboxType'
import Text from './inputTypes/TextType'
import Radio from './inputTypes/RadioType'
import Select from './inputTypes/SelectType'
import TextArea from './inputTypes/TextAreaType'

const QuestionTypes = {
  checkbox: CheckBox,
  text: Text,
  radio: Radio,
  textArea: TextArea,
  select: Select
}

const Question = ({ question, className }) => {
  if (!question || !QuestionTypes[question.type]) return null
  const TypeComponent = QuestionTypes[question.type]
  return <TypeComponent question={question} className={className} />
}

export default Question
