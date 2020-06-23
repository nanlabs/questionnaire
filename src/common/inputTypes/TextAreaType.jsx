import React from 'react'

const TextAreaType = ({ className, question }) => {
  return (
    <div className={className}>
      <h3>{question.label}</h3>
      <textarea rows='5' cols='50' />
    </div>
  )
}

export default TextAreaType
