import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'


function FormikContainer() {
  const initialValues = {}
  const validationSchema = Yup.object({})
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {
            formik => (
              <Form>
                <h1>Formik Form</h1>
                {/* Add your form fields here */}
                <button type="submit">Submit</button>
              </Form>
            )
          }
        </Formik>
    </div>
  )
}

export default FormikContainer
