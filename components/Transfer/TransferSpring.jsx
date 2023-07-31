import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Select from 'react-tailwindcss-select';
import Loader from '../../public/assets/svgs/Loader.svg';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import ConfirmDetailsModal from './ConfirmDetailsModal';
import ChooseBeneficiaryModal from './ChooseBeneficiaryModal';
import SaveBeneficiaryModal from './SaveBeneficiaryModal';

const TransferSpring = (props) => {
  const initialInfos = {
    phoneCode: '',
    phoneNumber: '',
  };

  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showBeneficiary, setShowBeneficiary] = useState(false);
  const [beneficiaryInfos, setBeneficiaryInfos] = useState(initialInfos);
  const [openConfirmDetailsModal, setOpenConfirmDetailsModal] = useState('undefined');
  const [openChooseBeneficiaryModal, setOpenChooseBeneficiaryModal] = useState('undefined');
  const [openSaveBeneficiaryModal, setOpenSaveBeneficiaryModal] = useState('undefined');

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const {
    register: registerTransfer,
    handleSubmit: handleTransferSubmit,
    reset: resetTransfer,
    formState: {
      errors: errorsTransfer,
      isSubmitting: isSubmittingTransfer,
      isSubmitSuccessful: isSubmitSuccessfulTransfer,
    },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful && !isSubmitting) {
      reset();
      setShowBeneficiary(true);
    }
  }, [isSubmitting, isSubmitSuccessful, reset]);

  useEffect(() => {
    if (isSubmitSuccessfulTransfer && !isSubmittingTransfer) {
      resetTransfer();
    }
  }, [isSubmittingTransfer, isSubmitSuccessfulTransfer, resetTransfer]);

  useEffect(() => {
    if (isSubmitting) {
      setLoading(true);
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading, isSubmitting]);

  const submitHandler = (userData) => {
    // const newData = {...userData, bank: userData.bank.value}
    console.log(userData);
    setBeneficiaryInfos(() => {
      return userData;
    });
    setLoader(true);
  };

  const submitTransferHandler = (userData) => {
    console.log(userData);
    setOpenConfirmDetailsModal('default');
  };
  return (
    <>
      <section className="bg-white py-6 dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="grid grid-cols-3">
            <div className="max-w-3xl col-span-2">
              <div className="border p-8 rounded-lg">
                <h2 className="pb-4 font-medium font-nunito text-primaryTextColor text-lg">Beneficiary Details</h2>
                <div className="">
                  <form key={1} action="" method="post" className="" onSubmit={handleSubmit(submitHandler)}>
                    <div className="">
                      <div className="">
                        <div className="">
                          <label
                            htmlFor="phoneNumber"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                          >
                            Phone Number
                          </label>
                          <div className="mb-2 w-full flex">
                            <div className="w-1/6">
                              <select
                                id="phoneCode"
                                name="phoneCode"
                                defaultValue="+234"
                                className={
                                  errors.phoneCode
                                    ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 pr-8 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                                    : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                                }
                                {...register('phoneCode', { required: true })}
                              >
                                <option value="+234">+234</option>
                                <option value="+233">+233</option>
                                <option value="+235">+235</option>
                              </select>
                            </div>
                            <div className="w-72">
                              <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                className={
                                  errors.phoneNumber
                                    ? `ml-4 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                                    : `ml-4 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                                }
                                placeholder=""
                                {...register('phoneNumber', {
                                  required: true,
                                  minLength: { value: 5, message: 'The number is too short' },
                                  maxLength: { value: 10, message: 'The number is too long' },
                                })}
                              />
                              {errors.phoneNumber && (
                                <span className="mt-2 ml-4 text-sm text-red-600 dark:text-red-500">
                                  {errors.phoneNumber.message || `Field is required`}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <p
                          className="mb-4 font-medium text-primaryDarkPurple cursor-pointer"
                          onClick={() => setOpenChooseBeneficiaryModal('default')}
                        >
                          Choose Beneficiary
                        </p>
                      </div>
                      {!showBeneficiary ? (
                        loader ? (
                          <motion.div
                            src={Loader}
                            className="h-12 w-12"
                            animate={{
                              scale: [1, 1, 1, 1, 1],
                              rotate: [0, 30, 60, 240, 360],
                            }}
                            transition={{ duration: 2, ease: [0.5, 0.71, 1, 1.5] }}
                          >
                            <Image src={Loader} alt='Loader' />
                          </motion.div>
                        ) : (
                          <button
                            type="submit"
                            className="max-w-sm text-primaryBlue bg-primaryPurple focus:ring-0 focus:outline-none focus:ring-primaryPurple font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center"
                          >
                            Verify Beneficiary
                          </button>
                        )
                      ) : (
                        <div className=""></div>
                      )}
                    </div>
                  </form>
                  {showBeneficiary && (
                    <div className="">
                      <div style={{ borderTopWidth: '1px', borderBottomWidth: '1px' }} className="py-4 px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-14 h-14 bg-primaryHighlightYellow rounded-full">
                              <p className="text-sm font-bold font-nunito">NN</p>
                            </div>
                            <div className="">
                              <p className="">Beneficiary Name</p>
                              <p className="">Namikaze Norris Stein</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <button
                              type="button"
                              onClick={() => setOpenSaveBeneficiaryModal('default')}
                              className="focus:outline-none text-white bg-primaryDarkPurple cursor-pointer hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                            >
                              Save Beneficiary
                            </button>
                            <button
                              type="button"
                              className="text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                              Edit Beneficiary
                            </button>
                          </div>
                        </div>
                      </div>
                      <form key={2} action="" method="post" className="">
                        <div className="mt-6">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <label
                                htmlFor="amount"
                                className="block mb-2 text-sm font-normal text-primaryTextPlaceholder dark:text-gray-300"
                              >
                                Amount
                              </label>
                              <input
                                type="text"
                                id="amount"
                                name="amount"
                                className={
                                  errorsTransfer.amount
                                    ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                                    : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                                }
                                placeholder="Enter Amount"
                                {...registerTransfer('amount', {
                                  required: true,
                                })}
                              />
                              {errorsTransfer.amount && (
                                <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                                  {errorsTransfer.amount.message || `Field is required`}
                                </span>
                              )}
                            </div>
                            <div>
                              <label
                                htmlFor="purpose"
                                className="block mb-2 text-sm font-normal text-primaryTextPlaceholder dark:text-gray-300"
                              >
                                Purpose (Optional)
                              </label>
                              <select
                                id="purpose"
                                name="purpose"
                                defaultValue="Choose"
                                className={
                                  errorsTransfer.purpose
                                    ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 pr-8 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                                    : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                                }
                                {...registerTransfer('purpose')}
                              >
                                <option value="Choose">Choose</option>
                                <option value="electricity">Electricity</option>
                                <option value="airtime">Airtime</option>
                                <option value="data">Data</option>
                              </select>
                              {errorsTransfer.purpose && (
                                <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                                  {errorsTransfer.purpose.message || `Field is required`}
                                </span>
                              )}
                            </div>
                            <div>
                              <label
                                htmlFor="narration"
                                className="block mb-2 text-sm font-normal text-primaryTextPlaceholder dark:text-gray-300"
                              >
                                Narration
                              </label>
                              <input
                                type="text"
                                id="narration"
                                name="narration"
                                className={
                                  errorsTransfer.narration
                                    ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                                    : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                                }
                                placeholder="Reason for transfer"
                                {...registerTransfer('narration', {
                                  required: true,
                                })}
                              />
                              {errorsTransfer.narration && (
                                <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                                  {errorsTransfer.narration.message || `Field is required`}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
              {showBeneficiary && (
                <button
                  type="submit"
                  onClick={handleTransferSubmit(submitTransferHandler)}
                  className="my-8 ml-6 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Continue
                </button>
              )}
            </div>
            <div className="">
              <div className="px-6 py-8 max-w-sm bg-primaryDarkPurple text-center rounded-lg border shadow-none dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-sm text-left font-normal text-white font-nunito">Spring Balance</p>
                    <p className="text-3xl text-center font-bold py-2 text-white font-nunito">&#8358; 6,254,890.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConfirmDetailsModal
        openConfirmDetailsModal={openConfirmDetailsModal}
        setOpenConfirmDetailsModal={setOpenConfirmDetailsModal}
      />
      <ChooseBeneficiaryModal
        openChooseBeneficiaryModal={openChooseBeneficiaryModal}
        setOpenChooseBeneficiaryModal={setOpenChooseBeneficiaryModal}
      />
      <SaveBeneficiaryModal
        openSaveBeneficiaryModal={openSaveBeneficiaryModal}
        setOpenSaveBeneficiaryModal={setOpenSaveBeneficiaryModal}
        beneficiaryInfos={beneficiaryInfos}
      />
    </>
  );
};

TransferSpring.propTypes = {};

export default TransferSpring;
