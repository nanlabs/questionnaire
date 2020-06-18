export const setNextQuestions = (nextQuestionId, dispatch, questions) => {
  const nextQuestion = questions.find(
    (question) => question.id === nextQuestionId
  )
  nextQuestion && dispatch({ type: 'setNextQuestions', payload: nextQuestion })
}

export const setCurrentQuestions = (question, dispatch, questions) => {
  console.log(question)
  if (question) {
    const currentQuestions = questions.filter((q) => q.id === question.id)
    dispatch({ type: 'setCurrentQuestions', payload: currentQuestions })
    const prevQuestion = questions.find((q) => q.id === question.prevQuestion)
    dispatch({ type: 'setPreviousQuestions', payload: prevQuestion })
    const nextQuestion = questions.find((q) => q.id === question.nextQuestion)
    dispatch({ type: 'setNextQuestions', payload: nextQuestion })
  }
}
