import { Form, Formik } from 'formik';
import { Button } from "@chakra-ui/react";
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
              control="chakra-input"
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
            />
            <FormikControl
              control="chakra-input"
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              className="btn btn-primary"
              disabled={!formik.isValid}
            >
              Login
            </Button>
            <Button type="reset" className="btn btn-secondary">
              Reset
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
