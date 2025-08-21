import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    dateOption: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().min(1, 'At least one checkbox must be selected'),
    dateOption: Yup.date().required('Required'),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Formik Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="formik-form">
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
            />
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
              placeholder="Enter a description"
            />
            <FormikControl
              control="select"
              label="Select Option"
              name="selectOption"
              options={[
                { key: 'option1', value: 'option1', text: 'Option 1' },
                { key: 'option2', value: 'option2', text: 'Option 2' },
                { key: 'option3', value: 'option3', text: 'Option 3' },
              ]}
            />
            <FormikControl
              control="radio"
              label="Radio Options"
              name="radioOption"
              options={[
                { key: 'radio1', value: 'radio1', text: 'Radio 1' },
                { key: 'radio2', value: 'radio2', text: 'Radio 2' },
              ]}
            />
            <FormikControl
              control="checkbox"
              label="Checkbox"
              name="checkboxOption"
              options={[
                {
                  key: 'checkbox1',
                  value: 'checkbox1',
                  text: 'I accept the terms and conditions',
                },
                {
                  key: 'checkbox2',
                  value: 'checkbox2',
                  text: 'I do not accept the terms and conditions',
                },
                {
                  key: 'checkbox3',
                  value: 'checkbox3',
                  text: 'I agree to the privacy policy',
                },
              ]}
            />
            <FormikControl
              control="date"
              label="Select Date"
              name="dateOption"
              placeholderText="Select a date"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
