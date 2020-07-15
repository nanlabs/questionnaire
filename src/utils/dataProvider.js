export const DataProvider = (data) => ({
  getQuestions: () => {
    return data.questions
  },
  getSections: () => {
    return data.sections
  },
  getFirstQuestions: () => {
    return data.questions[0]
  },
  getQuestionById: (id) => {
    return data.questions.find((q) => q.id === id)
  },
  getNextQuestion: function (currentQuestion) {
    return this.getQuestionById(currentQuestion.nextQuestion)
  },
  getPrevQuestion: function (currentQuestion) {
    return this.getQuestionById(currentQuestion.prevQuestion)
  },
  getNextQuestionFromOption: function (option) {
    return this.getQuestionById(option.nextQuestion)
  },
  getLabel: (question) => {
    return question.label
  },
  getOptions: (question) => {
    return question.options
  },
  getId: (question) => {
    return question.id
  },
  getSectionId: (question) => {
    return question.sectionId
  },
  getType: (question) => {
    return question.type
  },
  getOptionLabel: (option) => {
    return option.label
  }
})
