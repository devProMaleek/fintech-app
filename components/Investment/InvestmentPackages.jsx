import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InvestmentContent from './InvestmentContent';
import { transparent } from 'tailwindcss/colors';

const InvestmentPackages = (props) => {
  const [clicked, setClicked] = useState(false);

  const investmentClickHandler = () => {
    setClicked(() => true);
  };
  const packagesClickHandler = () => {
    setClicked(() => false);
  };
  return (
    <>
      <section className="bg-primaryPurple py-6 dark:bg-gray-900">
        <div className=" px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="text-2xl text-primaryTextColor font-bold">Investment Packages</h2>

          <div className="p-2 my-4 max-w-sm bg-white rounded-full border shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-2">
              <div className={`${clicked ? `bg-transparent` : `bg-primaryBlue`} px-4 text-center py-2 rounded-full`}>
                <button className="text-white text-base font-bold" type="button" onClick={packagesClickHandler}>
                  <span className={`${clicked ? `text-primaryTextColor` : `text-white`} text-base font-nunito font-bold`}>Explore Packages</span>
                </button>
              </div>
              <div className={`${!clicked ? `bg-transparent` : `bg-primaryBlue`} px-4 text-center py-2 rounded-full`}>
                <button className="text-primaryTextColor text-base font-bold" type="button" onClick={investmentClickHandler}>
                  <span className={`${!clicked ? `text-primaryTextColor` : `text-white`} text-base font-nunito font-bold`}>My Investments</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InvestmentContent clicked={clicked} />
    </>
  );
};

InvestmentPackages.propTypes = {};

export default InvestmentPackages;
