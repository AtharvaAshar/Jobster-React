import React from 'react'

const Formrow = ({type,name,value,handleChange,labeltext}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className="form-label">
        {labeltext || name}
      </label>
      <input type={type}  name ={name} onChange={handleChange} value={value} className="form-input" />
    </div>
  )
}

export default Formrow
