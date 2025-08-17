import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};

const onSubmit = (values, onSubmitProps) => {
  alert(JSON.stringify(values, null, 2));
  console.log('submite props', onSubmitProps)
  onSubmitProps.setSubmitting(false);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  channel: Yup.string().required('Required'),
  address: Yup.string().required('Requiredelo'),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (value.length < 5) {
    error = 'Must be at least 5 characters';
  }
  return error;
};

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnMount
      // validateOnBlur={false}
      // validateOnChange={true}
    >
      {(formik) => {
        console.log('formik props', formik);

        return (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />
            <br />

            <label htmlFor="email">E-mail</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email">
              {(error) => <div className="error">{error}</div>}
            </ErrorMessage>
            <br />

            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" />
            <br />

            <label htmlFor="comments">Comments</label>

            <Field
              as="textarea"
              type="text"
              id="comments"
              name="comments"
              validate={validateComments}
            />
            <ErrorMessage name="comments" component={TextError} />
            <br />

            <label htmlFor="address">Address</label>
            <FastField type="text" id="address" name="address">
              {(props) => {
                console.log('Field rendered');
                const { field, form, meta } = props;
                return (
                  <div>
                    <input id="address" type="text" {...field} />
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </FastField>
            <br />

            <label htmlFor="facebook">Facebook profile</label>
            <Field type="text" id="facebook" name="social.facebook" />
            <br />
            <label htmlFor="twitter">Twitter profile</label>
            <Field type="text" id="twitter" name="social.twitter" />
            <br />

            <label htmlFor="primaryPh">Primary phone number</label>
            <Field type="text" id="primaryPh" name="phoneNuumbers[0]" />
            <br />
            <label htmlFor="secondaryPh">Secondary phone number</label>
            <Field type="text" id="secondaryPh" name="phoneNuumbers[1]" />
            <br />

            <label>List of phone numbers</label>
            <FieldArray name="phNumbers">
              {({ push, remove, form }) => {
                const { values } = form;
                const { phNumbers } = values;
                return (
                  <div>
                    {phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        {phNumbers.length > 1 && (
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        )}
                        {phNumbers.length - 1 === index && (
                          <button type="button" onClick={() => push('')}>
                            +
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>

            <button
              type="button"
              onClick={() => formik.validateField('comments')}
            >
              Validate Comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate All
            </button>
                        <button
              type="button"
              onClick={() => formik.setFieldTouched('comments')}
            >
              Visit Comments
            </button>
            <button type="button" onClick={() => formik.setTouched(
              {
                name: true,
                email: true,
                channel: true,
                comments: true,
                address: true,
              }
            )}>
              Visit Fields
            </button>
            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeForm;
