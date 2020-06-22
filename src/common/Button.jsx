import React from 'react'

export const Button = ({ style, onClick, text, className }) => {
  return (
    <button onClick={onClick} style={style} className={className}>
      {text}
    </button>
  )
}
