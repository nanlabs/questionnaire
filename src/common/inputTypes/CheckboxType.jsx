import React from 'react'

const Checkbox = ({ label, className, selectOption, options }) => {
  return (
    <div className={className}>
      <h3>{label}</h3>
      {options.map((option) => {
        return (
          <span key={option}>
            <option htmlFor={option} />
            {option}
            <input name={option} type='checkbox' onChange={selectOption} />
          </span>
        )
      })}
    </div>
  )
}

export default Checkbox
