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
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
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
                <h2 className="py-4 text-2xl font-nunito font-bold">Verify your Mobile Number</h2>
                <div className="my-4 mb-8 text-base font-normal">
                  <p className="text-primaryTextPlaceholder">Enter the six digit code sent to your number</p>
                  <span className="block text-primaryTextColor">+234 808 *** **76</span>
                </div>
                <div
                  className="hidden max-w-lg mx-auto p-4 my-4 text-center text-base text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                >
                  <p className="w-96 mx-auto font-normal">Verification code has been sent to both Whatsapp and Mobile Number</p>
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
                <div className="w-96 h-0.5 bg-gray-200 mx-auto my-6"></div>
                <Link href="#">
                  <a href="http://" className="text-primaryBlue text-base font-normal">
                    Didn't receive a code?
                  </a>
                </Link>
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
