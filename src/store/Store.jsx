import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { reducer } from './Reducer'
import Questions from '../components/Questions'

export const StateContext = createContext()

const persist = (reducer) => {
  return (state, action) => {
    const newState = reducer(state, action)
    localStorage.setItem('store', JSON.stringify(newState))
    return newState
  }
}

export const Store = ({ questionnaire, sectiones, children }) => {
  const cache = localStorage.getItem('store')
  const initialState = cache ? JSON.parse(cache) : {}
  return (
    <StateContext.Provider value={useReducer(persist(reducer), initialState)}>
      <Questions questionnaire={questionnaire} sectiones={sectiones}>
        <div>{children}</div>
      </Questions>
    </StateContext.Provider>
  )
}
Store.defaultProps = {
  children: null
}

Store.propTypes = {
  children: PropTypes.element
}

export const useStore = () => useContext(StateContext)
