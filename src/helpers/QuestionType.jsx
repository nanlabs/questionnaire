import React from 'react'
import PropTypes from 'prop-types'
import CheckBox from '../inputTypes/CheckboxType'
import Text from '../inputTypes/TextType'
import Radio from '../inputTypes/RadioType'
import Select from '../inputTypes/SelectType'
import TextArea from '../inputTypes/TextAreaType'

const QuestionTypes = {
  checkbox: CheckBox,
  text: Text,
  radio: Radio,
  textArea: TextArea,
  select: Select
}

const Question = ({ question, style }) => {
  console.log(style)
  if (!question || !QuestionTypes[question.type]) return null
  const TypeComponent = QuestionTypes[question.type]
  return <TypeComponent question={question} style={style} />
}

Question.defaultProps = {
  question: {}
}

Question.propTypes = {
  question: PropTypes.objectOf(PropTypes.any)
}

export default Question
