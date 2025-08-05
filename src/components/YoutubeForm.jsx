import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  channel: Yup.string().required('Required'),
});

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />
        <br />

        <label htmlFor="email">E-mail</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email" />
        <br />

        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" />
        <br />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
