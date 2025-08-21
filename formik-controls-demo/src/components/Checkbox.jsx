import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function Checkbox(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label> {label}</label>
      <Field type="checkbox" name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => (
            <div key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.text}</label>
            </div>
          ));
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} className="error" />
    </div>
  );
}

export default Checkbox;
