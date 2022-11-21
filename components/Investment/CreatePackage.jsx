import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CreateInvestmentModal from './CreateInvestmentModal';

const CreatePackage = (props) => {
  const [openModal, setOpenModal] = useState('undefined');
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <section className="bg-white py-6 dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="flex items-center space-x-5">
          <svg
            className="w-6 h-6 text-primaryTextColor"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M177.5 98c-8.8-3.8-19-2-26 4.6l-144 136C2.7 243.1 0 249.4 0 256s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 288 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-288 0 0-88c0-9.6-5.7-18.2-14.5-22z" />
          </svg>
          <h2 className="font-nunito font-bold text-xl text-primaryTextColor">Easy Save</h2>
        </div>

        <div className="mt-10 grid grid-cols-3">
          <form className="max-w-3xl col-span-2" onSubmit={submitHandler}>
            <div className="border p-8 rounded-lg">
              <h2 className="pb-4 font-medium font-nunito text-primaryTextColor text-lg">Create Investment Plan</h2>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Amount To Invest"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Source
                  </label>
                  <select
                    id="countries"
                    defaultValue="springBalance"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="springBalance">Spring Balance</option>
                    <option value="bankTransfer">Bank Transfer</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Tenure
                  </label>
                  <select
                    id="countries"
                    defaultValue="bankTransfer"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="springBalance">Spring Balance</option>
                    <option value="bankTransfer">Bank Transfer</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              type="submit"
              onClick={() => setOpenModal('default')}
              className="my-8 ml-6 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue
            </button>
          </form>
          <div className="">
            <div className="px-6 py-8 max-w-sm bg-primaryDarkPurple text-center rounded-lg border shadow-none dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-sm text-left font-normal text-white font-nunito">Spring Balance</p>
                  <p className="text-3xl text-center font-bold py-2 text-white font-nunito">&#8358; 6,254,890.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreateInvestmentModal openModal={openModal} setOpenModal={setOpenModal} />
    </section>
  );
};

CreatePackage.propTypes = {};

export default CreatePackage;
