export const reducer = (state, action) => {
  switch (action.type) {
    case "setCurrentQuestion":
      return { ...state, currentQuestion: action.payload };
    case "setNextQuestion":
      return { ...state, nextQuestion: action.payload };
    case "setPreviousQuestion":
      return { ...state, prevQuestion: action.payload };
    case "setQuestions":
      return { ...state, questions: action.payload };
    case "setSections":
      return { ...state, sections: action.payload };
    default:
      return state;
  }
};
