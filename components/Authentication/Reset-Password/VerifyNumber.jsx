import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Logo from '../../../public/assets/svgs/Spring-Logo.svg';
import Link from 'next/link';

const VerifyNumber = (props) => {
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
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="bg-white mt-10 w-5xl p-8 text-center rounded-lg" style={{ width: '45%' }}>
              <div className="">
                <div className="mt-4">
                  <Image src={Logo} width="100px" height="60px" className="mr-3 h-9" alt="Spring Logo" />
                </div>
                <h2 className="py-4 text-2xl font-nunito font-bold">Reset Password</h2>
                <div className="my-4 mb-8 text-base font-normal">
                  <p className="text-primaryTextPlaceholder">
                    Enter the six digit code sent to <span className="text-primaryTextColor">bo*******@gmail.com</span>
                  </p>
                </div>
                <div
                  className="hidden max-w-lg mx-auto p-4 my-4 text-center text-base text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                >
                  <p className="w-96 mx-auto font-normal">
                    Verification code has been sent to both Whatsapp and Mobile Number
                  </p>
                </div>
                <form action="" method="post">
                  <div className="max-w-lg my-4 mx-auto grid grid-cols-6 justify-items-center border rounded-lg p-6">
                    <input
                      type="text"
                      id="default-input"
                      maxLength="1"
                      className="bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <input
                      type="text"
                      id="default-input"
                      maxLength="1"
                      className="bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <input
                      type="text"
                      id="default-input"
                      className="bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <input
                      type="text"
                      id="default-input"
                      maxLength="1"
                      className="bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <input
                      type="text"
                      id="default-input"
                      maxLength="1"
                      className="bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <input
                      type="text"
                      id="default-input"
                      maxLength="1"
                      className="bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
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

VerifyNumber.propTypes = {};

export default VerifyNumber;
