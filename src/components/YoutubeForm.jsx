import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
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
  phNumbers: ['']
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  channel: Yup.string().required('Required'),
  address: Yup.string().required('Requiredelo'),
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
        <ErrorMessage name="name" component={TextError}/>
        <br />

        <label htmlFor="email">E-mail</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email">
          {
            (error) => <div className="error">{error}</div>
          }
        </ErrorMessage>
        <br />

        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" />
        <br />

        <label htmlFor="comments">Comments</label>
        <Field as="textarea" type="text" id="comments" name="comments" />
        <br />

        <label htmlFor="address">Address</label>
        <Field type="text" id="address" name="address">
         {
          (props) => {
            const { field, form, meta } = props;
            return (
              <div>
                <input id='address' type="text" {...field} />
                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
              </div>
            );
          }
         }
        </Field>
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


        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
