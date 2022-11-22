import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/svgs/Spring-Logo.svg';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const SetPassword = (props) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialPasswordState = {
    backgroundColor: '',
    textContent: '',
  };

  const [passwordState, setPasswordState] = useState(initialPasswordState);

  const strengthChecker = (password) => {
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    let mediumPassword = new RegExp(
      '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'
    );

    if (strongPassword.test(password)) {
      setPasswordState((prevState) => {
        return {
          ...prevState,
          backgroundColor: 'green',
          textContent: 'Strong Password',
        };
      });
      return true;
    } else if (mediumPassword.test(password)) {
      setPasswordState((prevState) => {
        return {
          ...prevState,
          backgroundColor: 'blue',
          textContent: 'Medium Password',
        };
      });
      return false;
    } else {
      setPasswordState((prevState) => {
        return {
          ...prevState,
          backgroundColor: 'red',
          textContent: 'Weak Password',
        };
      });
      return false;
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful && !isSubmitting) {
      reset();
    }
  }, [isSubmitting, isSubmitSuccessful]);

  const submitHandler = (userData) => {
    console.log(userData);
    router.push('/login');
  };

  const handleChange = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmChange = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <section className="bg-primaryBlue h-screen dark:bg-gray-900">
        <nav className="">
          <div className="container flex justify-between items-center h-24 mx-auto">
            <div className="flex items-center space-x-5">
              <svg
                className="w-6 h-6 text-white cursor-pointer"
                fill="currentColor"
                onClick={() => router.back()}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M177.5 98c-8.8-3.8-19-2-26 4.6l-144 136C2.7 243.1 0 249.4 0 256s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 288 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-288 0 0-88c0-9.6-5.7-18.2-14.5-22z" />
              </svg>
              <h2 className="font-nunito font-bold text-xl text-white">Back</h2>
            </div>
          </div>
        </nav>
        <div className="py-4 px-4 sm:py-16 lg:px-6">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="bg-white my-3 flex items-center space-x-6 h-14 rounded-t-lg px-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primaryBlue flex justify-center items-center w-8 h-8 rounded-full ">
                  <p className="text-white">1</p>
                </div>
                <h5 className="text-primary">Personal Details</h5>
                <span className="">
                  <svg
                    className="w-5 h-5 text-primaryBlue"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white border-2 border-primaryBlue flex justify-center items-center w-8 h-8 rounded-full ">
                  <p className="text-primaryBlue">2</p>
                </div>
                <h5 className="text-primaryBlue">Verifications</h5>
                <span className="">
                  <svg
                    className="w-5 h-5 text-primaryBlue"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white border-2 border-primaryTextPlaceholder flex justify-center items-center w-8 h-8 rounded-full ">
                  <p className="text-primaryTextPlaceholder">3</p>
                </div>
                <h5 className="text-primaryTextPlaceholder">Set Password</h5>
                <span className="">
                  <svg
                    className="w-5 h-5 text-primaryTextPlaceholder"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="bg-white w-5xl p-8 text-center rounded-lg" style={{ width: '45%' }}>
              <div className="">
                <div className="mt-4">
                  <Image src={Logo} width="100px" height="60px" className="mr-3 h-9" alt="Spring Logo" />
                </div>
                <h2 className="py-4 text-2xl font-nunito font-bold">Set Password</h2>
                <div className="my-4 mb-8 text-base font-normal">
                  <p className="text-primaryTextPlaceholder">Set new Password for your account</p>
                </div>
                <form action="" method="post" onSubmit={handleSubmit(submitHandler)}>
                  <div className="max-w-md my-4 mx-auto border rounded-lg p-6">
                    <div
                      className={`${passwordState.textContent.length === 0 ? `hidden` : `block`} p-4 mb-4 text-sm  ${
                        passwordState.textContent === 'Strong Password'
                          ? `text-green-700 bg-green-100`
                          : passwordState.textContent === 'Medium Password'
                          ? `text-blue-700 bg-blue-100`
                          : `text-red-700 bg-red-100`
                      } rounded-lg dark:bg-green-200 dark:text-green-800`}
                      role="alert"
                    >
                      <span className="font-medium">{passwordState.textContent}</span>
                    </div>
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
                            validate: (value) => strengthChecker(value) || 'The password is invalid',
                            onChange: (event) => strengthChecker(event.target.value),
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
                    <div className="">
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Confirm New Password
                      </label>
                      <div className="relative mb-6">
                        <input
                          type={showConfirmPassword ? `text` : `password`}
                          id="confirm-password"
                          name="confirmPassword"
                          className={
                            errors.confirmPassword
                              ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                              : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                          }
                          placeholder=""
                          {...register('confirmPassword', {
                            required: true,
                            validate: (value) => {
                              if (watch('password') != value) {
                                return 'Your passwords do not  match';
                              }
                            },
                          })}
                        />

                        <div
                          className={`flex absolute ${
                            errors.confirmPassword ? `top-3` : `inset-y-0`
                          } right-0 items-center pr-3 cursor-pointer`}
                          onClick={handleConfirmChange}
                        >
                          {!showConfirmPassword ? (
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
                        {errors.confirmPassword && (
                          <span className="block mt-1 text-sm text-left text-red-600 dark:text-red-500">
                            {errors.confirmPassword.message || `Field is required`}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="my-8 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

SetPassword.propTypes = {};

export default SetPassword;
