import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaGoogle, FaGithub, FaFacebook, FaEye } from 'react-icons/fa';
import { Input } from '@components';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username required')
      .min(3, 'Username must be at least 3 characters')
      .max(15, 'Username must be less than 15 characters')
      .matches(/^[a-zA-Z]+$/, 'Username must contain only letters'),
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
            <h3 className="text-xl font-semibold">Welcome</h3>
            <span className="text-zinc-400">Sing up for a new account</span>
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
                    label="Username"
                    type="text"
                    name="username"
                    isError={errors.username}
                    placeholder="username"
                  />
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
          <div className="flex items-center justify-start gap-1">
            <input type="checkbox" />
            <label>
              I accept the{' '}
              <span className="text-orange-500 cursor-pointer hover:underline">
                Terms and Conditions
              </span>
            </label>
          </div>
          <div className="flex flex-col items-center w-full gap-2">
            <span>or continue with</span>
            <div className="flex gap-2">
              <button className="p-3 bg-orange-600 hover:bg-orange-700">
                <FaGoogle />
              </button>
              <button className="p-3 bg-orange-600 hover:bg-orange-700">
                <FaGithub />
              </button>
              <button className="p-3 bg-orange-600 hover:bg-orange-700">
                <FaFacebook />
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full gap-1">
            <p>Already have an account?</p>
            <Link className="text-orange-500 hover:underline" to="/login">
              Sing in
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

export default Register;
