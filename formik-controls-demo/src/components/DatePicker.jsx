import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={field.value}
              onChange={val => setFieldValue(name, val)}
              dateFormat="yyyy/MM/dd"
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} className="error" />
    </div>
  )
}

export default DatePicker
