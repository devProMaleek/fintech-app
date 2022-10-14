import React from 'react';
import PropTypes from 'prop-types';

const TransactionInsight = (props) => {
  return (
    <section className="bg-white py-6 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="text-2xl text-primaryTextColor font-bold">Transaction Insights</h2>
        <div className="px-6 py-4 my-8 max-w-lg bg-white rounded-lg border shadow-none dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-8 justify-items-center">
            <div className="flex items-center space-x-6 border-r border-gray-300">
              <div className="bg-green-500 flex items-center justify-center w-10 h-10 rounded-full">
                <svg className="w-5 h-5 rotate-45" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
              <div className="">
                <p className="text-lg font-semibold text-primaryTextColor">Inflow</p>
                <p className="text-xl font-semibold text-primaryTextColor">&#8358; 254,890.00</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-red-500 flex items-center justify-center w-10 h-10 rounded-full">
                <svg className="w-5 h-5 rotate-45" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
              </div>
              <div className="">
                <p className="text-lg font-semibold text-primaryTextColor">Outflow</p>
                <p className="text-xl font-semibold text-primaryTextColor">&#8358; 124,890.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 mt-4 w-48 border border-dashed border-primaryTextColor rounded-lg">
          <div className="flex items-center">
            <p className="">Transaction History</p>
            <svg className="pl-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

TransactionInsight.propTypes = {};

export default TransactionInsight;
