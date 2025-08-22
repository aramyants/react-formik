// import {
//   FormControl,
//   FormLabel,
//   Input,
//   FormErrorMessage,
// } from '@chakra-ui/react';
// import { Field } from 'formik';
// import React from 'react';

// function ChakraInput(props) {
//   const { label, name, ...rest } = props;
// <FormControl
//   return (
//     <Field name={name}>
//       {({ field, form }) => (
//         <FormControl
//           isInvalid={form.errors[name] && form.touched[name]}
//           className="form-control"
//         >
//           <FormLabel htmlFor={name}>{label}</FormLabel>
//           <Input id={name} {...field} {...rest} />
//           <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
//         </FormControl>
//       )}
//     </Field>
//   )
// }

// export default ChakraInput;

import {
  FieldRoot,
  FieldLabel,
  Input,
  FieldErrorText
} from '@chakra-ui/react';
import { Field } from 'formik';
import React from 'react';

function ChakraInput(props) {
  const { label, name, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, form }) => {
        const isError = form.errors[name] && form.touched[name];
        return (
          <FieldRoot invalid={isError}>
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            <Input
              id={name}
              {...field}
              {...rest}
            />
            {isError && (
              <FieldErrorText>
                {form.errors[name]}
              </FieldErrorText>
            )}
          </FieldRoot>
        );
      }}
    </Field>
  );
}

export default ChakraInput;
