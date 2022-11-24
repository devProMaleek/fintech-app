import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TransferContent from './TransferContent';

const Transfer = (props) => {
  const [clicked, setClicked] = useState(false);

  const transferBankClickHandler = () => {
    setClicked(() => true);
  };
  const transferSpringClickHandler = () => {
    setClicked(() => false);
  };
  return (
    <>
      <section className="bg-primaryPurple pt-6 dark:bg-gray-900">
        <div className=" px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="text-2xl text-primaryTextColor font-bold">Investment Packages</h2>

          <div className="p-2 mt-6 mb-2 max-w-sm bg-white rounded-full border shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-2">
              <div className={`${clicked ? `bg-transparent` : `bg-primaryBlue`} px-4 text-center py-2 rounded-full`}>
                <button className="text-white text-base font-bold" type="button" onClick={transferSpringClickHandler}>
                  <span className={`${clicked ? `text-primaryTextColor` : `text-white`} text-base font-nunito font-bold`}>Transfer to Spring</span>
                </button>
              </div>
              <div className={`${!clicked ? `bg-transparent` : `bg-primaryBlue`} px-4 text-center py-2 rounded-full`}>
                <button className="text-primaryTextColor text-base font-bold" type="button" onClick={transferBankClickHandler}>
                  <span className={`${!clicked ? `text-primaryTextColor` : `text-white`} text-base font-nunito font-bold`}>Transfer to Bank</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <TransferContent clicked={clicked}/>
      </section>

    </>
  );
};

Transfer.propTypes = {}

export default Transfer