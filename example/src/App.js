import React from 'react'
import { questions } from './questions'

import { Questionnaire, Question } from 'questionnaire'
import 'questionnaire/dist/index.css'

const App = () => {
  return (
    <Questionnaire questions={questions}>
      <Question />
    </Questionnaire>
  )
}

export default App
