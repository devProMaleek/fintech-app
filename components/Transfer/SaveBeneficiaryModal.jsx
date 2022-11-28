import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const SaveBeneficiaryModal = (props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful && !isSubmitting) {
      reset();
    }
  }, [isSubmitting, isSubmitSuccessful]);

  const submitHandler = (userData) => {
    const beneficiaryInfos = {
      ...props.beneficiaryInfos,
      beneficiaryName: userData.beneficiaryName
    }
    console.log(beneficiaryInfos);
    props.setOpenSaveBeneficiaryModal(undefined)
  };
  return (
    <>
      <Modal
        show={props.openSaveBeneficiaryModal === 'default'}
        onClose={() => props.setOpenSaveBeneficiaryModal(undefined)}
      >
        <div className="p-8">
          <h2 className="text-center text-2xl font-semibold font-nunito text-primaryTextColor">Save Beneficiary</h2>
          <Modal.Body>
              <div className="text-center mx-auto">
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit(submitHandler)}>
                  <div className="">
                    <div className="">
                      <div>
                        <label
                          htmlFor="beneficiaryName"
                          className="block mb-2 text-sm text-left font-normal text-primaryTextPlaceholder dark:text-gray-300"
                        >
                          Preferred Name
                        </label>
                        <input
                          type="text"
                          id="beneficiaryName"
                          name="beneficiaryName"
                          className={
                            errors.beneficiaryName
                              ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                              : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                          }
                          placeholder="Enter Beneficiary Name"
                          {...register('beneficiaryName', {
                            required: true,
                          })}
                        />
                        {errors.beneficiaryName && (
                          <span className="block mt-2 text-sm text-left text-red-600 dark:text-red-500">
                            {errors.beneficiaryName.message || `Field is required`}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Continue
                  </button>
                </form>
              </div>
          </Modal.Body>
          <div className="text-center">
            <p
              className="text-primaryBlue font-nunito font-semibold text-base cursor-pointer"
              onClick={() => props.setOpenSaveBeneficiaryModal(undefined)}
            >
              Cancel
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

SaveBeneficiaryModal.propTypes = {
  openSaveBeneficiaryModal: PropTypes.string,
  setOpenSaveBeneficiaryModal: PropTypes.func.isRequired,
  beneficiaryInfos: PropTypes.object.isRequired,
};

export default SaveBeneficiaryModal;
