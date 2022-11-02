import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'flowbite-react';
import Link from 'next/link';

const CreateInvestmentModal = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <div className="p-8">
          <h2 className="text-center text-2xl font-semibold font-nunito text-primaryTextColor">Investment Quote</h2>
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
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Tenure</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">12 Months</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Rate</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">12%</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Interest Amount</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 42,000</p>
              </div>
              <div className="flex items-center justify-between pt-3 border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Funding Source</p>
                <div className="">
                  <p className="text-md font-nunito font-semibold text-primaryTextColor">Spring Balance</p>
                  <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 6,254,890.00</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center my-4">
              <input
                id="checkbox-1"
                type="checkbox"
                value=""
                checked={isChecked}
                onChange={checkboxHandler}
                className="w-5 h-5 text-blue-600 bg-gray-200 rounded border-gray-300 cursor-pointer focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                  Spring Investment Terms and Conditions
                </a>
                .
              </label>
            </div>
          </Modal.Body>
          <div className="text-center">
            <Link href="/investment/create/transactionpin">
              <a className="">
                <button
                  type="button"
                  disabled={!isChecked}
                  className={`mb-8 max-w-xs text-white ${
                    !isChecked ? `cursor-not-allowed` : ``
                  } bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                  Continue
                </button>
              </a>
            </Link>
            <p
              className="text-primaryBlue font-nunito font-semibold text-base cursor-pointer"
              onClick={() => props.setOpenModal(undefined)}
            >
              Cancel
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

CreateInvestmentModal.propTypes = {};

export default CreateInvestmentModal;
