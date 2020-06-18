import React from 'react'
import { action } from '@storybook/addon-actions'
// import { Button } from '@storybook/react/demo'
import { Button } from '../src/common/Button'

export default {
  title: 'Button',
  component: Button
}

export const Next = () => (
  <Button text='Next' onClick={action('Go to the next question')} />
)

export const Back = () => (
  <Button text='Back' onClick={action('Go to the previous question')} />
)
