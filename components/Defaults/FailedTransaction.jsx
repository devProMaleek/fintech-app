import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import FailedIcon from '../../public/assets/svgs/Failed.svg';
import { useRouter } from 'next/router';

const FailedTransaction = (props) => {
  const router = useRouter();
  return (
    <>
      <section className="bg-primaryLightGrey h-screen py-6 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="flex flex-col justify-center items-center p-6">
            <div className="p-6">
              <Image src={FailedIcon} alt="Success Icon" width="96px" height="96px" />
            </div>
            <div className="py-6 pt-8 w-full max-w-sm bg-white rounded-lg shadow-none clip-path-mypolygon sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="text-center">
                <h5 className="text-xl font-bold font-nunito text-primaryRed dark:text-white">
                  Transaction Failed
                </h5>
                <p className="py-1 text-sm font-medium font-nunito text-primaryGrayText dark:text-blue-500">
                Kindly check your internet connection
                </p>
              </div>
            </div>

            <Link href="#">
                <button
                  type="button"
                  className="my-8 max-w-sm text-white bg-primaryRed hover:bg-primaryLightGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Retry Transaction
                </button>
            </Link>

            <p
              className="text-primaryTextColor font-nunito font-semibold text-base cursor-pointer"
              onClick={() => router.push('/dashboard')}
            >
              Back to Home
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

FailedTransaction.propTypes = {};

export default FailedTransaction;
