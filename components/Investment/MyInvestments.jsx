import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'flowbite-react';
import MaturingModal from './MaturingModal';
import MaturedModal from './MaturedModal';

const MyInvestments = (props) => {
  const [openMaturingModal, setOpenMaturingModal] = useState('undefined');
  const [openMaturedModal, setOpenMaturedModal] = useState('undefined');
  return (
    <>
      <div className="grid grid-cols-3 gap-8 ">
        <div className="bg-primaryLightYellow p-8 mr-3 border-2 rounded-lg border-dashed border-primaryHighlightYellow">
          <div className="mb-6">
            <span className="bg-primaryLightYellow py-2 px-6 border border-primaryHighlightYellow text-primaryTextColor text-lg font-nunito font-bold rounded-full dark:text-green-900">
              Maturing
            </span>
          </div>
          <div
            className="border border-primaryHighlightYellow p-6 my-4 rounded-lg cursor-pointer"
            onClick={() => setOpenMaturingModal('default')}
          >
            <h5 className="font-nunito font-bold text-primaryTextColor text-lg">Easy Save</h5>
            <p className="font-nunito py-3 font-normal text-base text-primaryTextColor">
              Invested N350,000 for 12 Months with 12% interest
            </p>
            <span className="bg-primaryYellow text-primaryTextColor text-xs font-nunito font-bold mr-2 px-2.5 py-0.5 rounded-full dark:text-green-900">
              Maturity Date: 18th December, 2023
            </span>
          </div>
          <div className="border border-primaryHighlightYellow p-6 my-4 rounded-lg">
            <h5 className="font-nunito font-bold text-primaryTextColor text-lg">Easy Wealth</h5>
            <p className="font-nunito py-3 font-normal text-base text-primaryTextColor">
              Invested N350,000 for 12 Months with 12% interest
            </p>
            <span className="bg-primaryYellow text-primaryTextColor text-xs font-nunito font-bold mr-2 px-2.5 py-0.5 rounded-full dark:text-green-900">
              Maturity Date: 18th December, 2023
            </span>
          </div>
          <div className="border border-primaryHighlightYellow  p-6 my-4 rounded-lg">
            <h5 className="font-nunito font-bold text-primaryTextColor text-lg">Easy Save</h5>
            <p className="font-nunito py-3 font-normal text-base text-primaryTextColor">
              Invested N350,000 for 12 Months with 12% interest
            </p>
            <span className="bg-primaryYellow text-primaryTextColor text-xs font-nunito font-bold mr-2 px-2.5 py-0.5 rounded-full dark:text-green-900">
              Maturity Date: 18th December, 2023
            </span>
          </div>
        </div>
        <div className="bg-primaryLightGreen p-8 ml-3 border-2 rounded-lg border-dashed border-primaryGreen">
          <div className="mb-6">
            <span className="bg-primaryGreen py-2 px-6 border border-primaryGreen text-white text-lg font-nunito font-bold rounded-full dark:text-green-900">
              Matured
            </span>
          </div>
          <div
            className="border border-primaryGreen p-6 my-4 rounded-lg cursor-pointer"
            onClick={() => setOpenMaturedModal('default')}
          >
            <h5 className="font-nunito font-bold text-primaryTextColor text-lg">Easy Save</h5>
            <p className="font-nunito py-3 font-normal text-base text-primaryTextColor">
              Invested N350,000 for 12 Months with 12% interest
            </p>
            <span className="bg-primaryGreen text-white text-xs font-nunito font-bold mr-2 px-2.5 py-0.5 rounded-full dark:text-green-900">
              Matured: 27th October, 2022
            </span>
          </div>
          <div className="border border-primaryGreen p-6 my-4 rounded-lg">
            <h5 className="font-nunito font-bold text-primaryTextColor text-lg">Easy Wealth</h5>
            <p className="font-nunito py-3 font-normal text-base text-primaryTextColor">
              Invested N350,000 for 12 Months with 12% interest
            </p>
            <span className="bg-primaryGreen text-white text-xs font-nunito font-bold mr-2 px-2.5 py-0.5 rounded-full dark:text-green-900">
              Matured: 27th October, 2022
            </span>
          </div>
        </div>
      </div>

      <MaturingModal openMaturingModal={openMaturingModal} setOpenMaturingModal={setOpenMaturingModal} />
      <MaturedModal openMaturedModal={openMaturedModal} setOpenMaturedModal={setOpenMaturedModal} />

      

      
    </>
  );
};

MyInvestments.propTypes = {};

export default MyInvestments;
