import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Radio(props) {
  const { label, name, options, ...rest } = props
  return (
      <div className="form-control">
        <label>{label}</label>
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map(option => (
              <div key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  />
                <label htmlFor={option.value}>{option.text}</label>
              </div>
            ));
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} className="error" />
      </div>
  )
}

export default Radio
