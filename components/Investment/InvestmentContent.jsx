import React from 'react';
import PropTypes from 'prop-types';
import MyInvestments from './MyInvestments';
import ExplorePackages from './ExplorePackages';

const InvestmentContent = (props) => {
  console.log(props.clicked);
  return (
    <>
      <section className="bg-primaryPurple pt-6 rounded-t-lg dark:bg-gray-900">
        <div className="bg-white rounded-t-xl">
          <div className=" py-4 px-4 mx-auto rounded-lg max-w-screen-xl sm:py-16 lg:px-6">
            <div>
              <div className="p-4 rounded-lg dark:bg-gray-800">
                {props.clicked ? <MyInvestments/> : <ExplorePackages />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

InvestmentContent.propTypes = {};

export default InvestmentContent;
