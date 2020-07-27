import React from 'react'
import { useStore } from '../Questionnaire/QuestionnaireContext'

export const Progress = ({ className, component }) => {
  const [{ dataProvider, currentQuestions }] = useStore()
  if (!dataProvider.getQuestionPosition) return null

  const progressMade = dataProvider.getQuestionPosition(currentQuestions)
  const totalQuestions = dataProvider.getQuestions().length
  const defaultComponent = (
    <div>
      {progressMade} / {totalQuestions}
    </div>
  )

  const costumComponent = (
    <component progress={progressMade} total={totalQuestions} />
  )

  return component ? costumComponent : defaultComponent
}
