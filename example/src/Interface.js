export default {
  getNextQuestions: (nextQuestionId, questions) => {
    return questions.find((question) => question.id === nextQuestionId)
  },

  getCurrentQuestion: (question, questions) => {
    if (question) {
      console.log(questions)
      const currentQuestions = questions.filter((q) => q.id === question.id)
      return currentQuestions
    }
  },

  getOptions: (label, questions) => {
    return questions.find((q) => q.label === label).options
  }
}
