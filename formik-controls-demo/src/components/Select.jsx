import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Select(props) {
  const { label, name, options, ...rest } = props
  return (

      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as="select" id={name} name={name} {...rest}>
          {options.map(option => (
            <option key={option.key} value={option.value}>
              {option.text}
            </option>
          ))}
        </Field>
        <ErrorMessage name={name} component={TextError} className="error" />
      </div>

  )
}

export default Select
