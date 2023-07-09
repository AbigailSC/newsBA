import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import * as Yup from 'yup';

import { Input } from '@components';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
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

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex w-full">
      <div className="flex items-center justify-center w-full min-h-[calc(100vh-100px)] lg:w-1/2 xl:w-2/5">
        <div className="flex flex-col items-start w-full max-w-lg gap-5 p-5 h-min">
          <div className="flex flex-col items-center w-full gap-1">
            <span className="text-3xl">👋</span>
            <h3 className="text-xl font-semibold">Welcome Back</h3>
            <span className="text-zinc-400">
              Enter your Login details below
            </span>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ errors }) => (
              <Form className="flex flex-col w-full gap-10">
                <div className="flex flex-col gap-4 text-black">
                  <Input
                    label="Email"
                    type="text"
                    name="email"
                    isError={errors.email}
                    placeholder="username@email.com"
                  />
                  <Input
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    isError={errors.password}
                    placeholder="Password"
                  >
                    <button
                      className="absolute right-2 top-10"
                      onClick={(e) => handleShowPassword(e)}
                    >
                      <FaEye className="text-2xl text-zinc-700" />
                    </button>
                  </Input>
                </div>
                <button className="py-3 bg-orange-600 rounded-sm" type="submit">
                  Sign in
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center w-full gap-2">
              <input type="checkbox" />
              <span className="font-medium text-zinc-400">Remember me</span>
            </div>
            <a
              href="#"
              className="font-medium text-orange-500 hover:underline min-w-max"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex justify-center w-full gap-1">
            <p>Not registered yet?</p>
            <Link className="text-orange-500 hover:underline" to="/register">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
      <div
        className="hidden bg-cover lg:flex lg:w-1/2 lg:min-h-[calc(100vh-80px)] xl:w-3/5"
        style={{
          backgroundImage:
            'url(https://www.gamespot.com/a/bundles/gamespotsite/images/bg-auth.jpg)'
        }}
      ></div>
    </section>
  );
};

export default Login;
