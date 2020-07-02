import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { reducer } from './Reducer'

export const StateContext = createContext()

const persist = (reducer) => {
  return (state, action) => {
    const newState = reducer(state, action)
    localStorage.setItem('store', JSON.stringify(newState))
    return newState
  }
}

export const Questionnaire = ({ children }) => {
  const cache = localStorage.getItem('store')
  const initialState = cache ? JSON.parse(cache) : {}
  return (
    <StateContext.Provider value={useReducer(persist(reducer), initialState)}>
      {children}
    </StateContext.Provider>
  )
}
Questionnaire.defaultProps = {
  children: null
}

Questionnaire.propTypes = {
  children: PropTypes.element
}

export const useStore = () => useContext(StateContext)
