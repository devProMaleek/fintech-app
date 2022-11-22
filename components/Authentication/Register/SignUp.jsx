import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/svgs/Spring-Logo.svg';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Spinner } from 'flowbite-react';

const SignUp = (props) => {
  const router = useRouter();
  const initialState = {
    firstName: '',
    lastName: '',
    phoneCode: '+234',
    phoneNumber: '',
    referralCode: '',
    emailAddress: '',
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ defaultValues: initialState });

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
    router.push('/register/verifynumber');
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
              <form method="post" className="max-w-lg col-span-2" onSubmit={handleSubmit(submitHandler)}>
                <h2 className="pb-4 font-medium font-nunito text-primaryTextColor text-lg">Register</h2>
                <div className="border p-8 rounded-lg">
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={
                          errors.firstName
                            ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                            : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                        }
                        placeholder="Francis"
                        {...register('firstName', { required: true })}
                      />
                      {errors.firstName && (
                        <span className="mt-2 text-sm text-red-600 dark:text-red-500">Field is required</span>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={
                          errors.lastName
                            ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                            : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                        }
                        placeholder="Chijoke"
                        {...register('lastName', { required: true })}
                      />
                      {errors.lastName && (
                        <span className="mt-2 text-sm text-red-600 dark:text-red-500">Field is required</span>
                      )}
                    </div>
                  </div>
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

                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Phone Number
                  </label>
                  <div className="w-full flex">
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
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className={
                          errors.phoneNumber
                            ? `ml-4 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                            : `ml-4 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                        }
                        placeholder=""
                        {...register('phoneNumber', { required: true })}
                      />
                      {errors.phoneNumber && (
                        <span className="mt-2 ml-4 text-sm text-red-600 dark:text-red-500">Field is required</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="referralCode"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Referral Code
                    </label>
                    <input
                      type="text"
                      id="referralCode"
                      name="referralCode"
                      className={
                        errors.referralCode
                          ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                          : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                      }
                      placeholder=""
                      {...register('referralCode', { required: true })}
                    />
                    {errors.referralCode && (
                      <span className="mt-2 text-sm text-red-600 dark:text-red-500">Field is required</span>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="my-8 max-w-xs text-white  bg-primaryBlue hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {isSubmitting ? <Spinner /> : `Continue`}
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-0.5 w-48 bg-gray-500"></div>
                  <h5 className="px-2">OR</h5>
                  <div className="h-0.5 w-48 bg-gray-500"></div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => router.push('/login')}
                    className="my-8 max-w-xs text-blue bg-primaryPurple hover:bg-purple-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
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

SignUp.propTypes = {};

export default SignUp;
