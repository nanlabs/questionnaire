import React from 'react'

const TextType = ({ className, label }) => {
  return (
    <div className={className}>
      <h3>{label}</h3>
      <input type='text' />
    </div>
  )
}

export default TextType
