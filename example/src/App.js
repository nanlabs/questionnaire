import React from 'react'
import { data } from './questions'
import { Section } from './questionComponents/Section';
import './index.scss'

import {
  QuestionnaireContext,
  Question,
  Questionnaire,
  Nav,
  NextQuestion,
  PrevQuestion,
  DataProvider,
  Progress
} from 'questionnaire'

let dataProvider = DataProvider(data)
const App = () => {
  return (
    <QuestionnaireContext>
      <Questionnaire
        className='questionnaire-container'
        dataProvider={dataProvider}
      >
        <Progress></Progress>
        <Nav className='nav' simpleSection={false} costumComponent={Section}/>
        <Question className='question-container'>
          <span>
            <PrevQuestion text='Back' className='buttons' />
            <NextQuestion text='Next' className='buttons' />
          </span>
        </Question>
      </Questionnaire>
    </QuestionnaireContext>
  )
}

export default App
