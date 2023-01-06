import React from 'react';
import PropTypes from 'prop-types';
import FundCard from './FundCard';
import FundTransfer from './FundTransfer';

const FundContent = (props) => {
  return (
    <>
      <section className="bg-primaryPurple pt-4 rounded-t-lg dark:bg-gray-900">
        <div className="bg-white rounded-t-xl">
          <div className=" py-4 px-4 mx-auto rounded-lg max-w-screen-xl sm:py-16 lg:px-6">
            <div>
              <div className="p-4 rounded-lg dark:bg-gray-800">{props.clicked ?  <FundTransfer /> : <FundCard />}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

FundContent.propTypes = {
  clicked: PropTypes.bool.isRequired,
};

export default FundContent;
