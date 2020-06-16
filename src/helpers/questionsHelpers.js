export const setNextQuestion = (nextQuestionId, dispatch, questions) => {
  const nextQuestion = questions.find(
    (question) => question.id === nextQuestionId
  );
  nextQuestion && dispatch({ type: "setNextQuestion", payload: nextQuestion });
};

export const setCurrentQuestion = (question, dispatch, questions) => {
  if (question) {
    dispatch({ type: "setCurrentQuestion", payload: question });
    const prevQuestion = questions.find((q) => q.id === question.prevQuestion);
    dispatch({ type: "setPreviousQuestion", payload: prevQuestion });
    const nextQuestion = questions.find((q) => q.id === question.nextQuestion);
    dispatch({ type: "setNextQuestion", payload: nextQuestion });
  }
};
