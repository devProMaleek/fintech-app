import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const FundCard = (props) => {
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
  }, [isSubmitting, isSubmitSuccessful, reset]);

  const submitHandler = (userData) => {
    console.log(userData);
    router.push(`/fund/transactionpin`);

  };
  return (
    <div className="mt-10 grid grid-cols-3">
      <form className="max-w-3xl col-span-2" onSubmit={handleSubmit(submitHandler)}>
        <div className="border p-8 pt-6 rounded-lg">
          <h4 className="pb-4 font-medium font-nunito text-primaryTextColor text-lg">
            Select a card and enter the amount to fund
          </h4>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="card"
                className="block mb-2 text-primaryTextPlaceholder text-sm font-normal dark:text-gray-400"
              >
                Card
              </label>
              <select
                id="card"
                name="card"
                defaultValue="springBalance"
                className={
                  errors.card
                    ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 pr-8 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                    : `bg-gray-200 border border-gray-300 text-primaryTextColor text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                }
                {...register('card', { required: true })}
              >
                <option value="5199 **** **** **72">5199 **** **** **72</option>
                <option value="5199 **** **** **34">5199 **** **** **34</option>
                <option value="5199 **** **** **56">5199 **** **** **56</option>
              </select>
              {errors.card && (
                <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.card.message || `Field is required`}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="amount"  className="block mb-2 text-primaryTextPlaceholder text-sm font-normal dark:text-gray-400">
                Amount to Fund
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                className={
                  errors.amount
                    ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                    : `bg-gray-200 border border-gray-300 text-primaryTextColor text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                }
                placeholder="Amount"
                {...register('amount', {
                  required: true,
                })}
              />
              {errors.amount && (
                <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.amount.message || `Field is required`}
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="my-8 ml-6 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

FundCard.propTypes = {};

export default FundCard;
