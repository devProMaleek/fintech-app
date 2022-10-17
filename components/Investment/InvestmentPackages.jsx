import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InvestmentContent from './InvestmentContent';

const InvestmentPackages = (props) => {
  const [clicked, setClicked] = useState(false);

  const clickedHandler = () => {
    setClicked(() => !clicked);
  };
  return (
    <>
      <section className="bg-primaryPurple py-6 dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="text-2xl text-primaryTextColor font-bold">Investment Packages</h2>

          <div className="p-2 my-6 max-w-sm bg-white rounded-full border shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div
              className="grid grid-cols-2 gap-2"
              id="investmentTab"
              data-tabs-toggle="#investmentTabContent"
              role="tablist"
            >
              <div className="bg-primaryBlue px-4 text-center py-2 rounded-full" role="presentation">
                <button
                  className="text-white text-base font-bold"
                  id="explorePackages-tab"
                  data-tabs-target="#explorePackages"
                  type="button"
                  role="tab"
                  aria-controls="explorePackages"
                  aria-selected="true"
                >
                  <span className="text-white text-base font-nunito font-bold">Explore Packages</span>
                </button>
              </div>
              <div className="px-4 text-center py-2 rounded-full" role="presentation">
                <button
                  className="text-primaryTextColor text-base font-bold"
                  id="myInvestments-tab"
                  data-tabs-target="#myInvestments"
                  type="button"
                  role="tab"
                  aria-controls="myInvestments"
                  aria-selected="false"
                >
                  <span className="text-primaryTextColor text-base font-bold">My Investments</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <InvestmentContent />
    </>
  );
};

InvestmentPackages.propTypes = {};

export default InvestmentPackages;
