import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import { Input } from '@components';

import { signupUser, clearError } from '@redux/slices/auth';
import { loginSchema } from '@utils/validationSchema';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { errors } = useSelector((state) => state.authState);

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
            validationSchema={loginSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const res = await dispatch(
                  signupUser(values.email, values.password)
                );
                if (res) {
                  resetForm();
                  dispatch(clearError());
                  navigate('/');
                }
              } catch (error) {
                console.log(error.message);
              }
            }}
          >
            {({ errors }) => (
              <Form className="flex flex-col w-full gap-10">
                <div className="flex flex-col gap-4 text-black">
                  <Input
                    label="Email"
                    type="email"
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
          {errors && (
            <span className="flex items-center justify-center w-full gap-1">
              <BiError className="inline-block mr-1 text-xl text-red-600" />
              <p className="text-red-600 ">{errors}</p>
            </span>
          )}
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
