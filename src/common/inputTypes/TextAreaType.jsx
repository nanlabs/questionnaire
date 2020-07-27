import React from 'react'

const TextAreaType = ({ className, label }) => {
  return (
    <div className={className}>
      <h3>{label}</h3>
      <textarea rows='5' cols='50' />
    </div>
  )
}

export default TextAreaType
