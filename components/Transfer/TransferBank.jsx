import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-tailwindcss-select';

const TransferBank = (props) => {
  const [bank, setBank] = useState(null);

  const options = [
    { value: 'fox', label: '🦊 Fox' },
    { value: 'Butterfly', label: '🦋 Butterfly' },
    { value: 'Honeybee', label: '🐝 Honeybee' },
  ];

  const handleChange = (value) => {
    console.log('value:', value);
    setBank(value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <section className="bg-white py-6 dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="grid grid-cols-3">
            <form className="max-w-3xl col-span-2" onSubmit={submitHandler}>
              <div className="border p-8 rounded-lg">
                <h2 className="pb-4 font-medium font-nunito text-primaryTextColor text-lg">Beneficiary Details</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="">
                    <div className="mb-2">
                      <label
                        htmlFor="amount"
                        className="block mb-2 text-sm font-medium text-primaryTextPlaceholder dark:text-gray-300"
                      >
                        Transfer To
                      </label>
                      <input
                        type="text"
                        id="amount"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Amount To Invest"
                        required=""
                      />
                    </div>
                    <p className="font-medium text-primaryDarkPurple">Choose Beneficiary</p>
                  </div>
                  <div className="">
                    <div>
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-primaryTextPlaceholder dark:text-gray-400"
                      >
                        Bank
                      </label>
                      <Select
                        value={bank}
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleChange}
                        options={options}
                        placeholder="Select Bank"
                        searchInputPlaceholder="Search Beneficiary Bank"
                        isSearchable
                      />
                      {/* <select
                        id="countries"
                        defaultValue="springBalance"
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="springBalance">Spring Balance</option>
                        <option value="bankTransfer">Bank Transfer</option>
                        <option value="cash">Cash</option>
                      </select> */}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="max-w-xs text-primaryBlue bg-primaryPurple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Verify Beneficiary
                  </button>
                </div>
              </div>
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
      </section>
    </>
  );
};

TransferBank.propTypes = {};

export default TransferBank;
