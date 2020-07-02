import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const input = {
  background: '#0B0D1A',
  boxShadow: 'inset 4px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '6px',
  marginBottom: '1em',
  border: 'none',
  height: '2.5em',
  width: '25em'
}

export default function BasicTextFields({ setNextQuestion }) {
  return (
    <form>
      <input style={input} placeholder='here your input' />
    </form>
  )
}
