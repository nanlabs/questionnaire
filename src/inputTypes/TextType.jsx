import React from 'react'
import { useStore } from '../store/Store'

const TextType = () => {
  const [{ currentQuestion }] = useStore()

  return (
    <div>
      <h3>{currentQuestion.label}</h3>
      <input type='text' />
    </div>
  )
}

export default TextType
