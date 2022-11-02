import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import invest from '../../public/assets/svgs/invest.svg';
import bills from '../../public/assets/svgs/bills.svg';
import referrals from '../../public/assets/svgs/referral.svg';
import transfer from '../../public/assets/svgs/transfer.svg';

const Header = (props) => {
  return (
    <>
    <section className="bg-primaryBlue py-6 dark:bg-gray-900">
      <div className="gap-12 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="px-6 py-8 max-w-lg bg-primaryBlue rounded-lg text-white shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-normal">Spring Balance</p>
              <p className="text-3xl font-bold py-1">&#8358; 6,254,890.00</p>
              <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">
                +0.003% in last 24 hours
              </span>
            </div>
            <div>
              <button
                type="button"
                className="text-primaryBlue bg-primaryYellow hover:bg-primaryLightYellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg className="mr-2 -ml-1 w-5 h-5 text-blue-200" fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
                Fund Balance
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 max-w-xl bg-blue-800 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-cols-4 gap-4 justify-items-center ">
            <div className="text-center pl-0 pr-6 border-r border-gray-500">
              <Image width="38px" height="34px" src={invest} className="text-center"  />
              <p className='text-center text-xl text-bold text-white pt-2'>Invest</p>
            </div>
            <div className="text-center p-x-6 border-r border-gray-500">
              <Image width="38px" height="34px" src={transfer} className="text-center" />
              <p className='text-center text-xl text-bold text-white pt-2'>Transfer</p>
            </div>
            <div className="text-center p-x-6 border-r border-gray-500">
              <Image width="38px" height="34px" src={bills} className="text-center"  />
              <p className='text-center text-xl text-bold text-white pt-2'>Pay Bills</p>
            </div>
            <div className="text-center p-x-6">
              <Image width="38px" height="34px" src={referrals} className="text-center"  />
              <p className='text-center text-xl text-bold text-white pt-2'>Referral</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    </>

    
  );
};

Header.propTypes = {};

export default Header;
