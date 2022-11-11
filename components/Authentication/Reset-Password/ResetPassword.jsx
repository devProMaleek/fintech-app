import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/svgs/Spring-Logo.svg';

const ResetPassword = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                className="w-6 h-6 text-white"
                fill="currentColor"
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
          <div className="flex  flex-col justify-center items-center w-full h-full">
            <div className="bg-white mt-10 w-5xl p-8 text-center rounded-lg" style={{ width: '45%' }}>
              <div className="">
                <div className="mt-4">
                  <Image src={Logo} width="100px" height="60px" className="mr-3 h-9" alt="Spring Logo" />
                </div>
                <h2 className="py-4 text-2xl font-nunito font-bold">Reset Password</h2>
                <div className="my-4 mb-8 text-base font-normal">
                  <p className="text-primaryTextColor">Set new Password for your account</p>
                </div>
                <form action="" method="post">
                  <div className="max-w-md my-4 mx-auto border rounded-lg p-6">
                    <div className="">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300"
                      >
                        New Password
                      </label>
                      <div className="relative mb-6">
                        <input
                          type={showPassword ? `text` : `password`}
                          id="password"
                          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=" "
                        />

                        <div
                          className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer"
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
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Confirm New Password
                      </label>
                      <div className="relative mb-6">
                        <input
                          type={showConfirmPassword ? `text` : `password`}
                          id="password"
                          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=" "
                        />

                        <div
                          className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer"
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
                      </div>
                    </div>
                  </div>
                  <div className="my-4 pt-6">
                    <Link href="#">
                      <a href="http://" className="text-primaryDarkPurple text-base font-bold">
                        Resend Code
                      </a>
                    </Link>
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

ResetPassword.propTypes = {};

export default ResetPassword;
