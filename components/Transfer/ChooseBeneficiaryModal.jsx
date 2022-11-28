import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'flowbite-react';

const ChooseBeneficiaryModal = (props) => {
  return (
    <>
      <Modal
        show={props.openChooseBeneficiaryModal === 'default'}
        onClose={() => props.setOpenChooseBeneficiaryModal(undefined)}
      >
        <div className="p-8">
          <h2 className="text-center text-2xl font-semibold font-nunito text-primaryTextColor">Choose Beneficiary</h2>
          <Modal.Body>
            <div className="h-96 overflow-y-scroll border p-4 rounded-lg overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-primaryBlue scrollbar-thumb-rounded">
              <div className="pb-3 border-b border-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-primaryPurple rounded-full">
                    <p className="text-sm font-normal font-nunito uppercase">lt</p>
                  </div>
                  <div className="">
                    <p className="text-base font-normal font-nunito">Lynn Tanner</p>
                    <p className="text-sm font-normal font-nunito">Access Bank . 20011230022</p>
                  </div>
                </div>
              </div>
              <div className="py-3 border-b border-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-primaryPurple rounded-full">
                    <p className="text-sm font-normal font-nunito uppercase">cr</p>
                  </div>
                  <div className="">
                    <p className="text-base font-normal font-nunito">Col. Roderick Decker</p>
                    <p className="text-sm font-normal font-nunito">UBA . 20011230022</p>
                  </div>
                </div>
              </div>
              <div className="py-3 border-b border-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-primaryPurple rounded-full">
                    <p className="text-sm font-normal font-nunito uppercase">lt</p>
                  </div>
                  <div className="">
                    <p className="text-base font-normal font-nunito">Lynn Tanner</p>
                    <p className="text-sm font-normal font-nunito">GTB . 20011230022</p>
                  </div>
                </div>
              </div>
              <div className="py-3 border-b border-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-primaryPurple rounded-full">
                    <p className="text-sm font-normal font-nunito uppercase">dm</p>
                  </div>
                  <div className="">
                    <p className="text-base font-normal font-nunito">Devon Miles</p>
                    <p className="text-sm font-normal font-nunito">Fidelity . 20011230022</p>
                  </div>
                </div>
              </div>
              <div className="py-3 border-b border-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-primaryPurple rounded-full">
                    <p className="text-sm font-normal font-nunito uppercase">mt</p>
                  </div>
                  <div className="">
                    <p className="text-base font-normal font-nunito">Mike Torello</p>
                    <p className="text-sm font-normal font-nunito">Access Bank . 20011230022</p>
                  </div>
                </div>
              </div>
              <div className="py-3 border-b border-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-primaryPurple rounded-full">
                    <p className="text-sm font-normal font-nunito uppercase">lt</p>
                  </div>
                  <div className="">
                    <p className="text-base font-normal font-nunito">Lynn Tanner</p>
                    <p className="text-sm font-normal font-nunito">GTB . 20011230022</p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <div className="text-center">
            <p
              className="text-primaryBlue font-nunito font-semibold text-base cursor-pointer"
              onClick={() => props.setOpenChooseBeneficiaryModal(undefined)}
            >
              Cancel
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

ChooseBeneficiaryModal.propTypes = {
  openChooseBeneficiaryModal: PropTypes.string,
  setOpenChooseBeneficiaryModal: PropTypes.func.isRequired,
};

export default ChooseBeneficiaryModal;
