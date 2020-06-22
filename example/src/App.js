import React from 'react'
import { questions } from './questions'
import { sections } from './sections'
import questionsHandler from './Interface'
import './index.css'

import { Questionnaire, Question, Nav, Next, Back } from 'questionnaire'

const App = () => {
  return (
    <Questionnaire
      questions={questions}
      sections={sections}
      className='questionnaire-container'
      questionsHandler={questionsHandler}
    >
      <Nav className={'nav'} />
      <Question className='question-container'>
        <span>
          <Back text='Back' className='buttons' />
          <Next text='Next' className='buttons' />
        </span>
      </Question>
    </Questionnaire>
  )
}

export default App
