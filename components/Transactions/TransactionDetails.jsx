import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const TransactionDetails = (props) => {
  const router = useRouter();
  return (
    <>
      <section className="bg-white py-6 dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="flex items-center space-x-5">
            <svg
              className="w-6 h-6 text-primaryTextColor cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => router.back()}
            >
              <path d="M177.5 98c-8.8-3.8-19-2-26 4.6l-144 136C2.7 243.1 0 249.4 0 256s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 288 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-288 0 0-88c0-9.6-5.7-18.2-14.5-22z" />
            </svg>
            <h2 className="font-nunito font-bold text-xl text-primaryTextColor">Namikaze Norris Stein</h2>
          </div>

          <div className="max-w-2xl my-4">
            <div className="border p-6 rounded-lg my-8">
              <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Beneficiary</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">Namikaze Norris Stein</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Account No</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">1047282188</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Bank</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">GTB</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Amount</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 42,000</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Purpose</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">House Rent</p>
              </div>
              <div className="flex items-center justify-between py-3 ">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Narration</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor w-60 text-right">
                  Narration goes here, max 50 characters is sufficient
                </p>
              </div>
            </div>

            <div className="border p-6 rounded-lg my-8">
              <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Source</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">Spring Account</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Fee</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 0.00</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Balance Before</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 5,842,000</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Balance After</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 5,800,000</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Status</p>
                <span className="bg-primaryGreen text-white text-xs font-nunito font-bold px-3 py-1 rounded-full dark:text-green-900">
                  Successful
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Reference</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">SPR-8392-HI7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

TransactionDetails.propTypes = {};

export default TransactionDetails;
