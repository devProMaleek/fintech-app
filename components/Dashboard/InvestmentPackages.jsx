import React from 'react';
import PropTypes from 'prop-types';

const InvestmentPackages = (props) => {
  return (
    <section className="bg-primaryPurple py-6 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="text-2xl text-primaryTextColor font-bold">Investment Packages</h2>

        <div className="grid grid-cols-4 gap-4">
          <div className="px-6 py-4 my-8 max-w-xs bg-green-500 rounded-lg border shadow-none dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="">
                <h5 className="text-white text-lg font-medium">Easy Save</h5>
                <p className="text-white text-sm font-normal py-2">Invest from N50,000 to N999,999</p>
                <span className="bg-primaryYellow text-primaryTextColor text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full dark:text-green-900">
                  up to 12% interest
                </span>
              </div>
              <svg className="pl-2 w-5 h-5" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
              </svg>
            </div>
          </div>
          <div className="px-6 py-4 my-8 max-w-xs bg-primaryDarkPurple rounded-lg border shadow-none dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="">
                <h5 className="text-white text-lg font-medium">Easy Vault</h5>
                <p className="text-white text-sm font-normal py-2">Invest from N1m to N5m</p>
                <span className="bg-primaryYellow text-primaryTextColor text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full dark:text-green-900">
                  up to 15% interest
                </span>
              </div>
              <svg className="pl-2 w-5 h-5" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
              </svg>
            </div>
          </div>
          <div className="px-6 py-4 my-8 max-w-xs bg-primaryBlue rounded-lg border shadow-none dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="">
                <h5 className="text-white text-lg font-medium">Easy Wealth</h5>
                <p className="text-white text-sm font-normal py-2">Invest from N5m above</p>
                <span className="bg-primaryYellow text-primaryTextColor text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full dark:text-green-900">
                  up to 18% interest
                </span>
              </div>
              <svg className="pl-2 w-5 h-5" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-3 mt-4 w-44 border border-dashed border-primaryTextColor rounded-lg">
          <div className="flex items-center space-x-3">
            <p className="text-sm text-primaryTextColor font-bold">My Investments</p>
            <svg className="pl-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

InvestmentPackages.propTypes = {};

export default InvestmentPackages;
