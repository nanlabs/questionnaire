import React from 'react'

export const Section = ({
  label,
  id,
  questionQuantity,
  clickSectionHandler,
}) => {

  const handleSectionClick = () => {
    clickSectionHandler(id)
  }

  return (
    <div style={{display:'flex', width: '100px', justifyContent: 'space-between'}}>
      <h2 onClick={handleSectionClick}>{label}</h2>
      <p>{questionQuantity}</p>
    </div>
  )
}

export default Section
