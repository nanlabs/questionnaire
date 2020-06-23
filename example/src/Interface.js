export default {
  getNextQuestions: (nextQuestionId, questions) => {
    return questions.find((question) => question.id === nextQuestionId)
  },

  getCurrentQuestion: (question, questions) => {
    if (question) {
      const currentQuestions = questions.filter((q) => q.id === question.id)
      return currentQuestions
    }
  }
}
