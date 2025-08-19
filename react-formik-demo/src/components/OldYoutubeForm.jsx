import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.channel) {
    errors.channel = 'Required';
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  channel: Yup.string().required('Required'),
});

function OldYoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });

  console.log(formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        <br />

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        <br />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;
