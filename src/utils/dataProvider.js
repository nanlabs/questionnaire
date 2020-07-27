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
  getType: (question) => {
    return question.type
  },
  getOptions: (question) => {
    if (!question.options) return null
    return question.options.map((op) => {
      return op.label
    })
  },
  getOptionFromLabel: (label, question) => {
    return question.options.find((q) => {
      return q.label === label
    })
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
  },
  getFields: (question) => {
    if (!question.fields) return null

    return question.fields
  },
  getFieldLabel: (field) => {
    return field.label
  },
  getFieldType: (field) => {
    return field.type
  },
  getFieldOptions: (field) => {
    if (!field.options) return null
    return field.options.map((op) => {
      return op.label
    })
  },

  getQuestionPosition: (question) => {
    return data.questions.findIndex((q) => q.id === question.id) + 1
  },

  // SECTIONS
  getQuestionQuantityForSection: (section) => {
    const sectionId = section.id
    return data.questions.filter((q) => q.sectionId === sectionId).length
  },
  getQuestionsBySection: function (section) {
    return data.questions.filter((q) => q.sectionId === section.id)
  },
  getSectionFirstQuestion: function (section) {
    return this.getQuestionsBySection(section)[0]
  },
  getSectionById: (id) => {
    return data.sections.find((s) => s.id === id)
  },
  getTotalQuestionQuantity: () => {
    return data.questions.length
  }
})
