import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'flowbite-react';

const MaturedModal = (props) => {
  return (
    <>
      <Modal show={props.openMaturedModal === 'default'} onClose={() => props.setOpenMaturedModal(undefined)}>
        <div className="p-8">
          <div className="text-center relative">
            <h2 className=" text-2xl font-semibold font-nunito text-primaryTextColor">Investment Quote</h2>
            <span className="bg-primaryGreen text-white text-xs font-nunito font-bold absolute right-0 top-2 mr-6 px-2.5 py-1 rounded-full dark:text-green-900">
              Matured
            </span>
          </div>
          <Modal.Body>
            <div className="border p-6 rounded-lg">
              <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Investment Plan</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">Easy Save</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Principal</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 350,000</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Start Date</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">17 October, 2022</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Tenure</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">12 Months</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Maturity Date</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">18 October, 2023</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Rate</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">12%</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Interest</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 42,000</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Final Payout</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 392,000</p>
              </div>
            </div>
          </Modal.Body>
          <div className="text-center">
            <button
              type="submit"
              onClick={() => props.setOpenMaturedModal(undefined)}
              className="mb-8 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

MaturedModal.propTypes = {};

export default MaturedModal;
