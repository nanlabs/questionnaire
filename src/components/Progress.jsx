import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'

export const Progress = ({ className, Component }) => {
  const [{ dataProvider, currentQuestions }] = useStore()
  if (!dataProvider || !dataProvider.getQuestionPosition) return null

  const progressMade = dataProvider.getQuestionPosition(currentQuestions)
  const totalQuestions = dataProvider.getQuestions().length

  return Component ? (
    <Component progress={progressMade} total={totalQuestions} />
  ) : (
    <div>
      {progressMade} / {totalQuestions}
    </div>
  )
}
