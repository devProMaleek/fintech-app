import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/svgs/Spring-Logo.svg';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const Login = (props) => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    const getLoggedInInfo = localStorage.getItem('isLoggedIn');

    if (getLoggedInInfo === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isSubmitSuccessful && !isSubmitting) {
      reset();
    }
  }, [isSubmitting, isSubmitSuccessful]);

  const isValidEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const submitHandler = (userData) => {
    console.log(userData);
    loginHandler();
    router.push('/dashboard');
  };

  const phoneClickHandler = () => {
    setClicked(() => true);
  };
  const emailClickHandler = () => {
    setClicked(() => false);
  };

  const handleChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="bg-white h-screen dark:bg-gray-900">
        <div className="flex w-full h-full">
          <div className="w-1/2 ">
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
              <div className="container flex justify-between items-center mx-auto">
                <div className="flex-none pr-8">
                  <Link href="/">
                    <a className="flex items-center w-auto">
                      <Image src={Logo} width="100px" height="60px" className="mr-3 h-6 sm:h-9" alt="Spring Logo" />
                    </a>
                  </Link>
                </div>
              </div>
            </nav>

            <div className="py-8 px-4 ml-6 flex flex-col justify-center items-start sm:py-16 lg:px-6">
              <div className="flex items-center space-x-3 mb-4">
                <svg
                  className="w-6 h-6 text-primaryTextColor cursor-pointer"
                  fill="currentColor"
                  onClick={() => router.back()}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M177.5 98c-8.8-3.8-19-2-26 4.6l-144 136C2.7 243.1 0 249.4 0 256s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 288 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-288 0 0-88c0-9.6-5.7-18.2-14.5-22z" />
                </svg>
                <h2 className="font-nunito font-bold text-xl text-primaryTextColor">Back</h2>
              </div>
              <h2 className="font-medium font-nunito text-primaryTextColor text-2xl">Login</h2>
              <div className="p-2 mt-6 mb-10 max-w-sm bg-white rounded-full border shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className={`${clicked ? `bg-transparent` : `bg-primaryBlue`} px-4 text-center py-2 rounded-full`}
                  >
                    <button className="text-white text-base font-bold" type="button" onClick={emailClickHandler}>
                      <span
                        className={`${
                          clicked ? `text-primaryTextColor` : `text-white`
                        } text-base font-nunito font-bold`}
                      >
                        Email Address
                      </span>
                    </button>
                  </div>
                  <div
                    className={`${!clicked ? `bg-transparent` : `bg-primaryBlue`} px-4 text-center py-2 rounded-full`}
                  >
                    <button
                      className="text-primaryTextColor text-base font-bold"
                      type="button"
                      onClick={phoneClickHandler}
                    >
                      <span
                        className={`${
                          !clicked ? `text-primaryTextColor` : `text-white`
                        } text-base font-nunito font-bold`}
                      >
                        Phone Number
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <form className="max-w-lg col-span-2" onSubmit={handleSubmit(submitHandler)}>
                <div className="border p-8 rounded-lg">
                  {!clicked ? (
                    <div className="mb-6">
                      <label
                        htmlFor="emailAddress"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Email Address
                      </label>
                      <input
                        // type="email"
                        id="emailAddress"
                        name="emailAddress"
                        className={
                          errors.emailAddress
                            ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                            : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                        }
                        placeholder="francischijoke001@gmail.com"
                        {...register('emailAddress', {
                          required: true,
                          validate: (value) => isValidEmail(value) || 'Provide a valid email',
                        })}
                      />
                      {errors.emailAddress && (
                        <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                          {errors.emailAddress.message || `Field is required`}
                        </span>
                      )}
                    </div>
                  ) : (
                    <>
                      <label
                        htmlFor="phoneNumber"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Phone Number
                      </label>
                      <div className="mb-6 w-full flex">
                        <div className="w-1/6">
                          <select
                            id="phoneCode"
                            name="phoneCode"
                            defaultValue="+234"
                            className={
                              errors.phoneCode
                                ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 pr-8 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                                : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                            }
                            {...register('phoneCode', { required: true })}
                          >
                            <option value="+234">+234</option>
                            <option value="+233">+233</option>
                            <option value="+235">+235</option>
                          </select>
                        </div>
                        <div className="w-72">
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className={
                              errors.phoneNumber
                                ? `ml-4 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                                : `ml-4 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                            }
                            placeholder=""
                            {...register('phoneNumber', {
                              required: true,
                              minLength: { value: 5, message: 'The number is too short' },
                              maxLength: { value: 10, message: 'The number is too long' },
                            })}
                          />
                          {errors.phoneNumber && (
                            <span className="mt-2 ml-4 text-sm text-red-600 dark:text-red-500">
                              {errors.phoneNumber.message || `Field is required`}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300"
                    >
                      Password
                    </label>
                    <div className="relative mb-6">
                      <input
                        type={showPassword ? `text` : `password`}
                        id="password"
                        name="password"
                        className={
                          errors.password
                            ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                            : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                        }
                        placeholder=""
                        {...register('password', {
                          required: true,
                        })}
                      />

                      <div
                        className={`flex absolute ${
                          errors.password ? `top-3` : `inset-y-0`
                        } right-0 items-center pr-3 cursor-pointer`}
                        onClick={handleChange}
                      >
                        {!showPassword ? (
                          <svg
                            className="w-5 h-5 pr-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 pr-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                          >
                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z" />
                          </svg>
                        )}
                      </div>
                      {errors.password && (
                        <span className="block mt-1 text-sm text-left text-red-600 dark:text-red-500">
                          {errors.password.message || `Field is required`}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-primaryBlue text-right my-0 py-0">Forgot Password?</p>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="my-8 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign In
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-0.5 w-48 bg-gray-200"></div>
                  <h5 className="px-2">OR</h5>
                  <div className="h-0.5 w-48 bg-gray-200"></div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    onClick={() => router.push('/register')}
                    className="my-8 max-w-xs text-blue bg-primaryPurple hover:bg-purple-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center bg-primaryBlue">
            <h2 className="justify-self-start text-4xl text-white my-8">How does it work?</h2>
            <div className="text-white flex justify-center items-center">
              <ol className="">
                <li className="relative -left-3">
                  <div className="flex items-center space-x-6">
                    <div className="flex justify-center items-center border-2 border-dashed w-24 h-24 border-primaryTextColor rounded-full">
                      <span className="flex justify-center items-center w-20 h-20 bg-primaryTextColor rounded-full dark:bg-blue-900">
                        <svg
                          className="w-7 h-7 text-white dark:text-blue-400"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="flex items-center mb-1 ml-4 text-xl font-semibold text-white dark:text-white">
                      Create an Account
                    </h3>
                  </div>
                </li>
                <li className="relative left-8 h-20 border-l-2 border-dashed"></li>
                <li className="relative -left-3">
                  <div className="flex items-center space-x-6">
                    <div className="flex justify-center items-center border-2 border-dashed w-24 h-24 border-white rounded-full">
                      <span className="flex justify-center items-center w-20 h-20 bg-white rounded-full dark:bg-blue-900">
                        <svg
                          className="w-7 h-7 text-primaryDarkPurple dark:text-blue-400"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H64c-35.35 0-64-28.66-64-64V96c0-35.34 28.65-64 64-64h117.5c16.97 0 33.25 6.742 45.26 18.75L275.9 96H416c35.35 0 64 28.66 64 64v32h-48V160c0-8.824-7.178-16-16-16H256L192.8 84.69C189.8 81.66 185.8 80 181.5 80H64C55.18 80 48 87.18 48 96v288l71.16-142.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="flex items-center mb-1 ml-4 text-xl font-semibold text-white dark:text-white">
                      Complete your KYC
                    </h3>
                  </div>
                </li>
                <li className="relative left-8 h-20 border-l-2 border-dashed"></li>
                <li className="relative -left-3">
                  <div className="flex items-center space-x-6">
                    <div className="flex justify-center items-center border-2 border-dashed w-24 h-24 border-white rounded-full">
                      <span className="flex justify-center items-center w-20 h-20 bg-primaryGreen rounded-full dark:bg-blue-900">
                        <svg
                          className="w-7 h-7 text-white dark:text-blue-400"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="flex items-center mb-1 ml-4 text-xl font-semibold text-white dark:text-white">
                      Start transacting &#38; investing
                    </h3>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Login.propTypes = {};

export default Login;
