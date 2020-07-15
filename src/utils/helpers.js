export const changeQuestion = (newQ, dispatch) => {
  dispatch({ type: 'setCurrentQuestions', payload: newQ })
}

export const selectOption = (option, dataProvider, dispatch) => {
  const nextQuestion = dataProvider.getNextQuestionFromOption(option)
  dispatch({ type: 'setNextQuestions', payload: nextQuestion })
}