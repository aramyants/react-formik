import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function EnrollementForm() {
  const dropdownOptions = [
    { key: 'Select your course', value: '', text: 'Select your course' },
    { key: 'React', value: 'react', text: 'React' },
    { key: 'Angular', value: 'angular', text: 'Angular' },
    { key: 'Vue', value: 'vue', text: 'Vue' },
  ];

  const checkBoxOptions = [
    { key: 'HTML', value: 'html', text: 'HTML' },
    { key: 'CSS', value: 'css', text: 'CSS' },
    { key: 'JavaScript', value: 'javascript', text: 'JavaScript' },
  ];

  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
    bio: Yup.string().required('Required!'),
    course: Yup.string().required('Required!'),
    skills: Yup.array()
      .min(1, 'Select at least one skill')
      .required('Required!'),
    courseDate: Yup.date().required('Required!'),
  });

  const onSubmit = (values) => console.log('Form data', values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className='formik-form'>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl control="textarea" label="Bio" name="bio" />
            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={dropdownOptions}
            />
            <FormikControl
              control="checkbox"
              label="Your Skills"
              name="skills"
              options={checkBoxOptions}
            />
            <FormikControl
              control="date"
              label="Course Date"
              name="courseDate"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EnrollementForm;
