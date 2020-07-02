import React, { useEffect } from 'react'
import { useStore } from '../Questionnaire/Questionnaire'
import { setCurrentQuestion } from '../utils/helpers'

export const Questions = ({
  questionnaireData,
  argSections, //remove this arg and include it in questionnaireData
  children,
  className,
  dataProvider
}) => {
  const [{ questions, sections }, dispatch] = useStore()
  console.log(dataProvider)

  // dispatch({ type: 'clear' })
  useEffect(() => {
    dispatch({ type: 'setQuestionnaire', payload: dataProvider })
  }, [dataProvider])

  useEffect(() => {
    if ((!sections && argSections) || argSections !== sections) {
      dispatch({ type: 'setSections', payload: argSections })
    }
  }, [sections, dispatch, argSections])

  useEffect(() => {
    if (!questions || questions !== questionnaireData) {
      dispatch({ type: 'setQuestions', payload: questionnaireData })
      setCurrentQuestion(
        dataProvider,
        questionnaireData[0],
        questionnaireData,
        dispatch
      )
    }
  }, [questionnaireData, questions])

  return <span className={className}>{children}</span>
}

export default Questions
