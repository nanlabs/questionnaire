import React from 'react'

const TextType = ({ className, question, dataProvider }) => {
 if(!dataProvider.getLabel) return null 

  return (
    <div className={className}>
      <h3>{dataProvider.getLabel(question)}</h3>
      <input type='text' />
    </div>
  )
}

export default TextType
