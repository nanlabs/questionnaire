import React from 'react'

const TextAreaType = ({ className, question, dataProvider }) => {
  if(!dataProvider.getLabel) return null 

  return (
    <div className={className}>
      <h3>{dataProvider.getLabel(question)}</h3>
      <textarea rows='5' cols='50' />
    </div>
  )
}

export default TextAreaType
