import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="login-form">
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!formik.isValid}
            >
              Login
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
