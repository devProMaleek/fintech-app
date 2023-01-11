import React from 'react';
import Image from 'next/image';
import Mobile from '../../public/assets/svgs/mobile.svg';
import Internet from '../../public/assets/svgs/internet.svg';
import Cable from '../../public/assets/svgs/cable.svg';
import Utility from '../../public/assets/svgs/utility.svg';
import PropTypes from 'prop-types';

const Bills = (props) => {
  return (
    <>
      <section className="bg-primaryPurple pt-6 dark:bg-gray-900">
        <div className=" px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="text-2xl text-primaryTextColor font-bold">Pay Bills</h2>
        </div>

        <div className="bg-primaryPurple pt-6 rounded-t-lg dark:bg-gray-900">
          <div className="bg-white rounded-t-xl">
            <div className="py-4 px-4 mx-auto rounded-lg max-w-screen-xl sm:py-16 lg:px-6">
              <div className="grid grid-cols-4 gap-8">
                <div className="p-4 mt-4 w-72 border border-primaryLightGrey rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="bg-primaryPurple p-3 rounded-md flex items-center justify-center">
                      <Image src={Mobile} className="mr-3 h-6 sm:h-9" alt="Mobile Logo" />
                    </div>
                    <p className="text-lg text-primaryTextColor font-normal">Airtime and Data</p>
                    <svg className="pl-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 mt-4 w-72 border border-primaryLightGrey rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="bg-primaryLightGreen p-3 rounded-md flex items-center justify-center">
                      <Image src={Cable} className="mr-3 h-9" alt="Cable Logo" />
                    </div>
                    <p className="text-lg text-primaryTextColor font-normal">Cable TV</p>
                    <svg className="pl-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 mt-4 w-72 border border-primaryLightGrey rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="bg-primaryLightPurple p-3 rounded-md flex items-center justify-center">
                      <Image src={Internet} className="mr-3 h-6 sm:h-9" alt="Internet Logo" />
                    </div>
                    <p className="text-lg text-primaryTextColor font-normal">Internet Services</p>
                    <svg className="pl-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 mt-4 w-72 border border-primaryLightGrey rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="bg-primaryLightRed p-3 rounded-md flex items-center justify-center">
                      <Image src={Utility} className="mr-3 h-6 sm:h-9" alt="Utility Logo" />
                    </div>
                    <p className="text-lg text-primaryTextColor font-normal">Utility Bills</p>
                    <svg className="pl-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
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

Bills.propTypes = {};

export default Bills;
