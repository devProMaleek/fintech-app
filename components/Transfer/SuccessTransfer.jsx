import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import SuccessIcon from '../../public/assets/svgs/Success.svg';

const SuccessTransaction = (props) => {
  return (
    <>
      <section className="bg-primaryLightGrey h-screen py-6 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="flex flex-col justify-center items-center p-6">
            <div className="p-6">
              <Image src={SuccessIcon} alt="Success Icon" width="96px" height="96px" />
            </div>
            <div className="py-6 pt-8 w-full max-w-sm bg-white rounded-lg shadow-none clip-path-mypolygon sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="text-center">
                <h5 className="text-xl font-bold font-nunito text-primaryGreen dark:text-white">
                  Transaction Successful
                </h5>
                <p className="py-1 text-sm font-medium font-nunito text-primaryGrayText dark:text-blue-500">
                  Your transfer was successful
                </p>
              </div>
              <div className="flow-root py-4">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium font-nunito text-primaryGrayText dark:text-white">Date</p>
                      </div>
                      <div className="inline-flex items-center dark:text-white">
                        <p className="text-sm font-medium font-nunito text-primaryTextColor">20th October, 2022</p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium font-nunito text-primaryGrayText dark:text-white">Type</p>
                      </div>
                      <div className="inline-flex items-center dark:text-white">
                        <p className="text-sm font-medium font-nunito text-primaryTextColor">Bank Transfer</p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium font-nunito text-primaryGrayText dark:text-white">
                          Beneficiary
                        </p>
                      </div>
                      <div className="inline-flex items-center dark:text-white">
                        <p className="text-sm font-medium font-nunito text-primaryTextColor">Namikaze Norris Stein</p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium font-nunito text-primaryGrayText dark:text-white">Amount</p>
                      </div>
                      <div className="inline-flex items-center dark:text-white">
                        <p className="text-sm font-medium font-nunito text-primaryTextColor">&#8358;42,000.00</p>
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium font-nunito text-primaryGrayText dark:text-white">
                          Reference
                        </p>
                      </div>
                      <div className="inline-flex items-center dark:text-white">
                        <p className="text-sm font-medium font-nunito text-primaryTextColor">Spr3092-G73</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/dashboard">
                <button
                  type="button"
                  className="my-8 max-w-sm text-white bg-primaryGreen hover:bg-primaryLightGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Back to Home
                </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

SuccessTransaction.propTypes = {};

export default SuccessTransaction;
