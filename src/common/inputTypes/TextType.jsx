import React from 'react'

const TextType = ({ className, question }) => {
  return (
    <div className={className}>
      <h3>{question.label}</h3>
      <input type='text' />
    </div>
  )
}

export default TextType
