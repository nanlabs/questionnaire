import React from 'react'
import { useStore } from '../store/Store'

const TextAreaType = ({ style }) => {
  const [{ currentQuestion }] = useStore()

  return (
    <div style={style}>
      <h3>{currentQuestion.label}</h3>
      <textarea rows='5' cols='50' />
    </div>
  )
}

export default TextAreaType
