import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { bankLists } from '../../public/assets/data/bankList';
import { motion } from 'framer-motion';
import Select from 'react-tailwindcss-select';
import Loader from '../../public/assets/svgs/Loader.svg';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';

const TransferBank = (props) => {
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful && !isSubmitting) {
      reset();
    }
  }, [isSubmitting, isSubmitSuccessful]);

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

  const bankOptions = bankLists?.map((bank, idx) => {
    return {
      value: bank.code,
      label: bank.name,
      key: idx,
    };
  });

  const submitHandler = (userData) => {
    // const newData = {...userData, bank: userData.bank.value}
    console.log(userData);
    setLoader(true);
  };
  return (
    <>
      <section className="bg-white py-6 dark:bg-gray-900">
        <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="grid grid-cols-3">
            <form className="max-w-3xl col-span-2" onSubmit={handleSubmit(submitHandler)}>
              <div className="border p-8 rounded-lg">
                <h2 className="pb-4 font-medium font-nunito text-primaryTextColor text-lg">Beneficiary Details</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="">
                    <div className="mb-2">
                      <label
                        htmlFor="amount"
                        className="block mb-2 text-sm font-medium text-primaryTextPlaceholder dark:text-gray-300"
                      >
                        Transfer To
                      </label>
                      <input
                        type="text"
                        id="amount"
                        name="amount"
                        className={
                          errors.amount
                            ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                            : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                        }
                        placeholder="Account Number"
                        {...register('amount', { required: true, valueAsNumber: true, })}
                      />
                      {errors.amount && (
                        <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.amount.message || `Field is required`}</span>
                      )}
                    </div>
                    <p className="font-medium text-primaryDarkPurple">Choose Beneficiary</p>
                  </div>
                  <div className="">
                    <div>
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-primaryTextPlaceholder dark:text-gray-400"
                      >
                        Bank
                      </label>
                      <Controller
                        name="bank"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            ref={null}
                            className="bg-gray-200 border border-gray-300 text-gray-900 text-base rounded-lg placeholder-red-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            options={bankOptions}
                            placeholder="Select Bank"
                            searchInputPlaceholder="Search Beneficiary Bank"
                            isSearchable
                          />
                        )}
                      />
                      {errors.bank && (
                        <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.bank.message || `Field is required`}</span>
                      )}
                    </div>
                  </div>
                  {loader ? (
                    <motion.div
                      src={Loader}
                      className="h-12 w-12"
                      animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 30, 60, 240, 360],
                      }}
                      transition={{ duration: 2, ease: [0.5, 0.71, 1, 1.5] }}
                    >
                      <Image src={Loader} />
                    </motion.div>
                  ) : (
                    <button
                      type="submit"
                      className="max-w-xs text-primaryBlue bg-primaryPurple focus:ring-0 focus:outline-none focus:ring-primaryPurple font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center"
                    >
                      Verify Beneficiary
                    </button>
                  )}
                </div>
              </div>
            </form>
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
    </>
  );
};

TransferBank.propTypes = {};

export default TransferBank;
