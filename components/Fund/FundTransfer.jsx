import React from 'react';
import { FaCopy } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FundTransfer = (props) => {
  return (
    <>
      <div className="max-w-2xl border p-8 pt-6 rounded-lg">
        <h3 className="pb-4 font-medium font-nunito text-primaryTextColor text-base">
          Make a transfer into the account details below to fund your Spring Balance
        </h3>
        <div className="border p-6 rounded-lg my-2">
          <div className="flex items-center justify-between pb-3 border-b border-gray-300">
            <p className="text-md font-nunito font-semibold text-primaryGrayText">Bank</p>
            <p className="text-md font-nunito font-semibold text-primaryTextColor">Providus Bank</p>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <p className="text-md font-nunito font-semibold text-primaryGrayText">Account No</p>
            <p className="flex items-center text-md font-nunito font-semibold text-primaryTextColor">2088221288 <FaCopy className='ml-4 text-primaryGrayIcon cursor-pointer' /></p>
          </div>
          <div className="flex items-center justify-between py-3 ">
            <p className="text-md font-nunito font-semibold text-primaryGrayText">Name</p>
            <p className="text-md font-nunito font-semibold text-primaryTextColor w-60 text-right">Cowries MFB</p>
          </div>
        </div>
      </div>
    </>
  );
};

FundTransfer.propTypes = {};

export default FundTransfer;
