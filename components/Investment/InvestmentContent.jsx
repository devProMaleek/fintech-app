import React from 'react';
import PropTypes from 'prop-types';
import MyInvestments from './MyInvestments';
import ExplorePackages from './ExplorePackages';

const InvestmentContent = (props) => {
  return (
    <>
      <section className="bg-primaryPurple pt-6 rounded-t-lg dark:bg-gray-900">
        <div className="bg-white rounded-t-xl">
          <div className=" py-4 px-4 mx-auto rounded-lg max-w-screen-xl sm:py-16 lg:px-6">
            <div id="investmentTabContent">
              <div
                className="hidden p-4 bg-white rounded-lg dark:bg-gray-800"
                id="explorePackages"
                role="tabpanel"
                aria-labelledby="explorePackages-tab"
              >
                <ExplorePackages/>
              </div>
              <div
                className="hidden p-4 bg-white rounded-lg dark:bg-gray-800"
                id="myInvestments"
                role="tabpanel"
                aria-labelledby="myInvestments-tab"
              >
                <MyInvestments />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </>
  );
};

InvestmentContent.propTypes = {};

export default InvestmentContent;
