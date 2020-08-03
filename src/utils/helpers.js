export const changeQuestion = (current, dispatch, next, prev) => {
  dispatch({ type: 'setCurrentQuestions', payload: current })
  dispatch({
    type: 'setNextQuestions',
    payload: next
  })
  dispatch({
    type: 'setPreviousQuestions',
    payload: prev
  })
}

export const selectOption = (option, dataProvider, dispatch) => {
  const nextQuestion = dataProvider.getNextQuestionFromOption(option)
  dispatch({ type: 'setNextQuestions', payload: nextQuestion })
}
