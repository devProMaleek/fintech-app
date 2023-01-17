import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'flowbite-react';
import Link from 'next/link';

const ConfirmDetailsModal = (props) => {
  return (
    <>
      <Modal show={props.openConfirmDetailsModal === 'default'} onClose={() => props.setOpenConfirmDetailsModal(undefined)}>
      <div className="p-8">
          <h2 className="text-center text-2xl font-semibold font-nunito text-primaryTextColor">Confirm Details</h2>
          <Modal.Body>
          <div className="border p-6 rounded-lg">
              <div className="flex items-center justify-between pb-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Category</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">Namikaze Norris Stein</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Biller</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">+234 808 123 4567</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Product</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">Cowries MFB</p>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Amount</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">&#8358; 42,000</p>
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="text-md font-nunito font-semibold text-primaryGrayText">Beneficiary</p>
                <p className="text-md font-nunito font-semibold text-primaryTextColor">+234 801 234 5678</p>
              </div>
            </div>
          </Modal.Body>
          <div className="text-center">
            <Link href="/bills/airtime-data/transactionpin">
              <a className="">
                <button
                  type="button"
                  className="mb-8 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Continue
                </button>
              </a>
            </Link>
            <p
              className="text-primaryBlue font-nunito font-semibold text-base cursor-pointer"
              onClick={() => props.setOpenConfirmDetailsModal(undefined)}
            >
              Cancel
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

ConfirmDetailsModal.propTypes = {
  openConfirmDetailsModal: PropTypes.string,
  setOpenConfirmDetailsModal: PropTypes.func.isRequired,
};

export default ConfirmDetailsModal;
