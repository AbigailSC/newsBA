import * as Yup from 'yup';

export const validationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required('Username required')
    .min(3, 'Username must be at least 3 characters')
    .max(15, 'Username must be less than 15 characters')
    .matches(
      /^[a-zA-Z0-9_.-]*$/,
      'Username must contain only letters, numbers, underscores, periods and dashes'
    ),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email required'),
  password: Yup.string()
    .trim()
    .required('Password required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{9,}$/,
      'Password must contain at least one uppercase, one lowercase, one number and one special character'
    )
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email required'),
  password: Yup.string()
    .trim()
    .required('Password required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{9,}$/,
      'Password must contain at least one uppercase, one lowercase, one number and one special character'
    )
});