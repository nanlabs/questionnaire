import React from 'react'
import { useStore } from '../store/Store'

const TextType = ({ style }) => {
  const [{ currentQuestion }] = useStore()

  return (
    <div style={style}>
      <h3>{currentQuestion.label}</h3>
      <input type='text' />
    </div>
  )
}

export default TextType
