import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const TransactionPinForm = (props) => {
  const router = useRouter();
  const submitHandler = (event) => {
    event.preventDefault();
    router.push('/investment/create/success')
  };
  return (
    <section className="bg-white py-6 dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="flex items-center space-x-5">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <h2 className="font-nunito font-bold text-xl text-primaryTextColor">Transaction Pin</h2>
        </div>

        <div className="mt-10 grid grid-cols-3">
          <form className="max-w-md col-span-2" onSubmit={submitHandler}>
            <div className="border p-8 rounded-lg">
              <h2 className="pb-4 font-medium font-nunito text-primaryTextColor text-lg">Complete your transaction</h2>
              <div className="">
                <div>
                  <label htmlFor="pin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Pin
                  </label>
                  <input
                    type="text"
                    id="pin"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type here"
                    required=""
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="my-8 ml-6 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

TransactionPinForm.propTypes = {};

export default TransactionPinForm;
