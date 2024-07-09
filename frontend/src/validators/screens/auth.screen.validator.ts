import * as yup from 'yup';

export const signUpValidationSchema = yup.object({
  name: yup
    .string()
    .trim('Name is missing!')
    .required('Name is required!')
    .matches(/^[A-Za-z]+$/, 'Please provide a valid name'),
  email: yup
    .string()
    .trim('Email address is missing!')
    .required('Email address is required!')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .required('Password is missing!')
    .matches(
      /^[A-Za-z0-9._!@#$%&*?]{8,30}$/,
      'Please follow all password rules',
    ),
});

export const signInValidationSchema = yup.object({
  email: yup
    .string()
    .trim('Email address is missing!')
    .required('Email address is required!')
    .email('Please provide a valid email address'),
  password: yup.string().required('Password is missing!'),
});
