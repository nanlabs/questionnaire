import React, { useState } from 'react'
import clsx from 'clsx'
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    color: '#ffffff',
    margin: '1em 0'
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '134%'
  },
  icon: {
    borderRadius: '34px',
    width: 16,
    height: 16,
    backgroundColor: '#0B0D1A',
    border: '1px solid #585F68',
    'input:hover ~ &': {
      backgroundColor: '#e9b516'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#e9b516',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  }
})

export default function RadioButtonsGroup({
  setNextQuestion,
  getOptions,
  question,
  questions
}) {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    const option = JSON.parse(event.target.value)
    setValue(option.label)
    setNextQuestion(option)
  }

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend' className={classes.root}>
        {question.label}
      </FormLabel>
      <RadioGroup
        aria-label={question.label}
        name='gender1'
        value={value}
        onChange={handleChange}
      >
        {getOptions &&
          getOptions(question.label, questions).map((option) => (
            <FormControlLabel
              key={option.label}
              value={JSON.stringify(option)}
              control={
                <Radio
                  className={classes.label}
                  checked={option.label === value}
                  color='default'
                  checkedIcon={
                    <span className={clsx(classes.icon, classes.checkedIcon)} />
                  }
                  icon={<span className={classes.icon} />}
                />
              }
              label={option.label}
            />
          ))}
      </RadioGroup>
    </FormControl>
  )
}
