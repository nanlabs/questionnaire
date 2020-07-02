export const setCurrentQuestion = (
  Questionnaire,
  currentQuestion,
  questions,
  dispatch,
  prevQuestions
) => {
  if (currentQuestion) {
    setQuestionsToStore(
      Questionnaire,
      currentQuestion,
      questions,
      dispatch,
      prevQuestions
    )
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
  dispatch,
  prevQuestions
) => {
  const question = Questionnaire.getCurrentQuestion(currentQuestion, questions)
  const nextQuestion = questions.find((q) => q.id === question[0].nextQuestion)
  dispatch({ type: 'setCurrentQuestions', payload: question })
  prevQuestions &&
    dispatch({ type: 'setPreviousQuestions', payload: prevQuestions[0] })
  dispatch({ type: 'setNextQuestions', payload: nextQuestion })
}
