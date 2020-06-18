import React from 'react'

export const Button = ({ style, onClick, text }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}
