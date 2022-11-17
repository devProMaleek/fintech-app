import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Transactions = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <section className="bg-primaryPurple pt-6 pb-4 dark:bg-gray-900">
        <div className=" px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="text-2xl text-primaryTextColor font-bold">Transaction History</h2>
        </div>
      </section>
      <section className="bg-primaryPurple pt-4 rounded-t-lg dark:bg-gray-900">
        <div className="bg-white rounded-t-xl">
          <div className="py-4 px-4 mx-auto rounded-lg max-w-screen-xl sm:py-16 lg:px-6">
            <div className="flex space-x-6">
              <div className="w-72 py-8">
                <form className="max-w-sm" onSubmit={submitHandler}>
                  <div className="border p-4 rounded-lg">
                    <h2 className="pb-4 font-medium font-nunito text-primaryTextColor text-lg">Filters</h2>
                    <div className="">
                      <div className="relative mb-3">
                        <div className="flex absolute inset-y-0 right-3 items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Start Date"
                        />
                      </div>
                      <div className="relative mb-3">
                        <div className="flex absolute inset-y-0 right-3 items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Start Date"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          id="amount"
                          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Minimum Amount"
                          required=""
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          id="amount"
                          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Maximum Amount"
                          required=""
                        />
                      </div>
                      <div className="mb-3">
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
                    <button
                      type="submit"
                      className="mt-4 mb-2 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Apply Filters
                    </button>
                  </div>
                </form>
              </div>
              <div className="grow py-8">
                <div className="bg-primaryPurple px-6 py-4 rounded-lg">
                  <div className="grid grid-cols-5">
                    <div className="text-lg px-2 text-primaryTextColor font-bold">
                      <p className="">Transaction Date</p>
                    </div>
                    <div className="text-lg px-4 text-primaryTextColor font-bold">
                      <p className="">Amount</p>
                    </div>
                    <div className="text-lg px-4 text-primaryTextColor font-bold">
                      <p className="">Beneficiary</p>
                    </div>
                    <div className="text-lg px-4 text-primaryTextColor font-bold">
                      <p className="">Type</p>
                    </div>
                    <div className="text-lg px-4 text-primaryTextColor font-bold">
                      <p className="">Status</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="px-6 py-4 text-primaryTextPlaceholder font-bold text-base">October, 2022</p>
                </div>
                <div className="border rounded-lg">
                  <div className="grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2 ">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-red-500 px-4 self-center">
                      <p className="">Failed</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2 ">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-red-500 px-4 self-center">
                      <p className="">Failed</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-red-500 px-4 self-center">
                      <p className="">Failed</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2 ">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div><div className="grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2 ">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div>
                  
                </div>
                <div className="">
                  <p className="px-6 py-4 text-primaryTextPlaceholder font-bold text-base">September, 2022</p>
                </div>
                <div className="border rounded-lg">
                  <div className="grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2 ">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-red-500 px-4 self-center">
                      <p className="">Failed</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2 ">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-red-500 px-4 self-center">
                      <p className="">Failed</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2 ">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div><div className="grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-primaryGreen px-4 self-center">
                      <p className="">Successful</p>
                    </div>
                  </div>
                  <div className="bg-gray-200 grid grid-cols-5 py-3 px-6">
                    <div className="text-base font-normal text-primaryTextColor px-2 ">
                      <p className="">Thur 16th Oct, 2022 5:48:00pm</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">&#8358;340,670.00</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Namikaze Norris Stein</p>
                    </div>
                    <div className="text-base font-normal text-primaryTextColor px-4 self-center">
                      <p className="">Bank Transfer</p>
                    </div>
                    <div className="text-base font-bold text-red-500 px-4 self-center">
                      <p className="">Failed</p>
                    </div>
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

Transactions.propTypes = {};

export default Transactions;
