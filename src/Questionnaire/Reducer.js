export const reducer = (state, action) => {
  switch (action.type) {
    case 'setValue':
      return { ...state, value: action.payload }
    case 'getValues':
      return { state, values: action.payload }
    case 'setCurrentQuestions':
      return { ...state, currentQuestions: action.payload }
    case 'setCurrentSection':
      return { ...state, currentSection: action.payload }
    case 'setNextQuestions':
      return { ...state, nextQuestions: action.payload }
    case 'setPreviousQuestions':
      return { ...state, prevQuestions: action.payload }
    case 'setQuestions':
      return { ...state, questions: action.payload }
    case 'setSections':
      return { ...state, sections: action.payload }
    case 'setDataProvider':
      return { ...state, dataProvider: action.payload }
    case 'setChangeQuestionHandler':
      return { ...state, changeQuestionHandler: action.payload }
    case 'clearStore':
      return { state: {} }
    default:
      return state
  }
}
