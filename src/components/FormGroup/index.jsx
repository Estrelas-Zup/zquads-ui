import React from 'react'
import './styled.css'

const FormGroup = (props) => {
  const {
    label,
    id,
    name,
    value,
    onChange,
    placeholder,
    type = 'text',
  } = props

  return (
    <div className='FormGroupContainer'>
      <label
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default FormGroup