export const setCurrentQuestion = (
  Questionnaire,
  currentQuestion,
  questions,
  dispatch
) => {
  if (currentQuestion) {
    setQuestionsToStore(Questionnaire, currentQuestion, questions, dispatch)
  }
}

export const setNextQuestion = (Questionnaire, option, questions, dispatch) => {
  const nextQuestion = Questionnaire.getNextQuestions(
    option.nextQuestion,
    questions
  )
  dispatch({ type: 'setNextQuestions', payload: nextQuestion })
}

const setQuestionsToStore = (
  Questionnaire,
  currentQuestion,
  questions,
  dispatch
) => {
  const question = Questionnaire.getCurrentQuestion(currentQuestion, questions)
  const prevQuestion = questions.find((q) => q.id === question[0].prevQuestion)
  const nextQuestion = questions.find((q) => q.id === question[0].nextQuestion)
  dispatch({ type: 'setCurrentQuestions', payload: question })
  dispatch({ type: 'setPreviousQuestions', payload: prevQuestion })
  dispatch({ type: 'setNextQuestions', payload: nextQuestion })
}
