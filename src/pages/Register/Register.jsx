import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FaGoogle, FaGithub, FaEye } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';

import { Input } from '@components';
import { validationSchema } from '@utils/validationSchema';
import { signinUser, clearError } from '@redux/slices/auth';

const Register = () => {
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
            <span className="text-3xl">👏</span>
            <h3 className="text-xl font-semibold">Welcome</h3>
            <span className="text-zinc-400">Sing up for a new account</span>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
              username: ''
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const res = await dispatch(
                  signinUser(values.email, values.password, values.username)
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
                    label="Username"
                    type="text"
                    name="username"
                    isError={errors.username}
                    placeholder="Enter a username"
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
                  Sign up
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
