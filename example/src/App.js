import React from 'react'
import { questions } from './questions'
import { sections } from './sections'
import questionsHandler from './Interface'
import { components } from './Components'

import './index.scss'

import {
  Questionnaire,
  Question,
  Questions,
  Nav,
  NextQuestion,
  PrevQuestion
} from 'questionnaire'

const App = () => {
  return (
    <Questionnaire>
      <Questions
        className='questionnaire-container'
        argSections={sections}
        dataProvider={questionsHandler}
        questionnaireData={questions}
      >
        <Nav className='nav' />
        <Question className='question-container' components={components}>
          <span>
            <PrevQuestion text='Back' className='buttons' />
            <NextQuestion text='Next' className='buttons' />
          </span>
        </Question>
      </Questions>
    </Questionnaire>
  )
}

export default App
