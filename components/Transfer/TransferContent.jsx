import React from 'react';
import PropTypes from 'prop-types';
import TransferBank from './TransferBank';
import TransferSpring from './TransferSpring';

const TransferContent = (props) => {
  return (
    <>
      <section className="bg-primaryPurple pt-4 rounded-t-lg dark:bg-gray-900">
        <div className="bg-white rounded-t-xl">
          <div className=" py-4 px-4 mx-auto rounded-lg max-w-screen-xl sm:py-16 lg:px-6">
            <div>
              <div className="p-4 rounded-lg dark:bg-gray-800">
                {props.clicked ? <TransferBank/> : <TransferSpring />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

TransferContent.propTypes = {
  clicked: PropTypes.bool.isRequired,
};

export default TransferContent;
