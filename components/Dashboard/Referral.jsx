import React from 'react';
import PropTypes from 'prop-types';

const Referral = (props) => {
  return (
    <section className="bg-white py-6 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="text-2xl text-primaryTextColor font-bold">Refer and Earn</h2>
        <p className="text-base font-normal text-primaryTextColor pt-2">Share your referral link to earn from referee transactions.</p>

        <div className="grid grid-cols-3 gap-3">
          <div className="px-6 py-4 my-8 max-w-sm bg-white rounded-lg border shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="">
                <span className="bg-primaryYellow text-primaryTextColor text-xs font-bold mr-2 px-2.5 py-0.5 rounded-sm dark:text-green-900">
                  Referral Code
                </span>
                <p className="text-base font-medium text-primaryTextColor pt-2">Your referral code is BL4FF</p>
              </div>
              <svg className="w-5 h-5" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z" />
              </svg>
            </div>
          </div>
          <div className="px-6 py-4 my-8 max-w-sm bg-white rounded-lg border shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="">
                <span className="bg-primaryYellow text-primaryTextColor text-xs font-bold mr-2 px-2.5 py-0.5 rounded-sm dark:text-green-900">
                  Referral Link
                </span>
                <p className="text-base font-medium text-primaryTextColor pt-2">https://spring.com/ref/Ghssuwuw</p>
              </div>
              <svg className="w-5 h-5" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-3 mt-4 w-36 border border-dashed border-primaryTextColor rounded-lg">
          <div className="flex items-center space-x-3">
            <p className="text-sm text-primaryTextColor font-bold">My Referrals</p>
            <svg className="pl-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

Referral.propTypes = {};

export default Referral;
