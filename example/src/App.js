import React from 'react'
import { questions } from './questions'
import { sections } from './sections'

import { Questionnaire, Question, Nav, Next, Back } from 'questionnaire'
import {
  navStyles,
  QuestionnaireContainer,
  QuestionContainer,
  buttonStyles
} from './styles'

const App = () => {
  return (
    <Questionnaire
      questions={questions}
      sections={sections}
      styles={QuestionnaireContainer}
    >
      <Nav style={navStyles} />
      <Question styles={QuestionContainer}>
        <span style={{ paddingLeft: '2em' }}>
          <Back
            text='Back'
            style={Object.assign(buttonStyles, { marginRight: '1em' })}
          />
          <Next text='Next' style={buttonStyles} />
        </span>
      </Question>
    </Questionnaire>
  )
}

export default App
