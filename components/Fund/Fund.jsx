import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FundContent from './FundContent';

const Fund = (props) => {
  const [clicked, setClicked] = useState(false);

  const fundTransferClickHandler = () => {
    setClicked(() => true);
  };
  const fundCardClickHandler = () => {
    setClicked(() => false);
  };
  return (
    <>
      <section className="bg-primaryPurple pt-6 dark:bg-gray-900">
        <div className=" px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="text-xl text-primaryTextColor font-bold">Fund Spring Balance</h2>

          <div className="p-2 mt-6 mb-2 max-w-sm bg-white rounded-full border shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-2">
              <div className={`${clicked ? `bg-transparent` : `bg-primaryBlue`} px-4 text-center py-2 rounded-full`}>
                <button className="text-white text-base font-bold" type="button" onClick={fundCardClickHandler}>
                  <span
                    className={`${clicked ? `text-primaryTextColor` : `text-white`} text-base font-nunito font-bold`}
                  >
                    Fund with Card
                  </span>
                </button>
              </div>
              <div className={`${!clicked ? `bg-transparent` : `bg-primaryBlue`} px-4 text-center py-2 rounded-full`}>
                <button
                  className="text-primaryTextColor text-base font-bold"
                  type="button"
                  onClick={fundTransferClickHandler}
                >
                  <span
                    className={`${!clicked ? `text-primaryTextColor` : `text-white`} text-base font-nunito font-bold`}
                  >
                    Fund with Transfer
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <FundContent clicked={clicked} />
      </section>
    </>
  );
};

Fund.propTypes = {};

export default Fund;
