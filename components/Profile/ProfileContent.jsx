import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import ChangingProgressProvider from './ChangingProgressProvider';
import Edit from '../../public/assets/svgs/edit.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const ProfileContent = (props) => {
  const percentage = 66;

  const [openModal, setOpenModal] = useState('undefined');

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
    console.log(userData);
    setOpenModal('default');
  };
  return (
    <>
      <div className="bg-primaryBlue w-full px-6 py-4">
        <div className="flex items-stretch space-x-5 text-white ">
          <div style={{ width: 165, height: 165 }}>
            <ChangingProgressProvider values={[0, 15]}>
              {(percentage) => (
                <CircularProgressbarWithChildren
                  styles={buildStyles({
                    textColor: 'red',
                    pathColor: 'gold',
                    trailColor: 'transparent',
                  })}
                  strokeWidth={1.75}
                  value={percentage}
                  text={`${percentage}%`}
                >
                  <div className="bg-white p-1.5 rounded-full ring-2 ring-white outline-white dark:ring-gray-500">
                    <div class="relative inline-flex items-center justify-center w-36 h-36 overflow-hidden bg-primaryLightGrey rounded-full dark:bg-gray-600">
                      <span class="bg-primaryLightGrey text-3xl font-medium text-primaryTextColor dark:text-gray-300">
                        MA
                      </span>
                    </div>
                  </div>
                </CircularProgressbarWithChildren>
              )}
            </ChangingProgressProvider>
          </div>
          <div className="self-center">
            <div className="space-y-5">
              <h2 className="text-2xl font-normal ">Micheal Akintola</h2>
              <div className="w-16 break-normal text-sm">35% Complete</div>
            </div>
          </div>
          <div className="bg-white mt-7 self-start flex items-center justify-center w-10 h-10 rounded-full">
            <Image src={Edit} className="mr-3 h-6 sm:h-9" alt="Mobile Logo" />
          </div>
        </div>
      </div>

      <div className="mt-10 mb-6 ml-6">
        <form className="max-w-md" onSubmit={handleSubmit(submitHandler)}>
          <div className="border p-8 rounded-lg">
            <h2 className="pb-6 font-medium font-nunito text-primaryTextColor text-lg">Personal Details</h2>
            <div className="mb-2">
              <div className="mb-3">
                <label htmlFor="bvn" className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-300">
                  BVN
                </label>
                <input
                  type="text"
                  id="bvn"
                  name="bvn"
                  className={
                    errors.bvn
                      ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                      : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                  }
                  {...register('bvn', {
                    required: true,
                  })}
                />
                {errors.bvn && (
                  <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.bvn.message || `Field is required`}
                  </span>
                )}
                <p className="text-primaryBlue text-sm text-right my-0 py-0">Why do we need it?</p>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="residentState"
                  className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-400"
                >
                  Resident State
                </label>
                <select
                  id="residentState"
                  name="residentState"
                  defaultValue="springBalance"
                  className={
                    errors.residentState
                      ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 pr-8 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                      : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                  }
                  {...register('residentState', { required: true })}
                >
                  <option value="lagos">Lagos</option>
                  <option value="ogun">Ogun</option>
                  <option value="ekiti">Ekiti</option>
                  <option value="ondo">Ondo</option>
                  <option value="sokoto">Sokoto</option>
                  <option value="rivers">Rivers</option>
                  <option value="abuja">Abuja</option>
                </select>
                {errors.residentState && (
                  <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.residentState.message || `Field is required`}
                  </span>
                )}
              </div>
              <div className="h-0.5 my-8 w-full bg-gray-200"></div>
              <h2 className="pb-6 font-medium font-nunito text-primaryTextColor text-lg">Next of Kin Details</h2>
              <div className="mb-6">
                <label htmlFor="fullName" className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="email"
                  id="fullName"
                  name="fullName"
                  className={
                    errors.fullName
                      ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                      : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                  }
                  placeholder="e.g. John Doe"
                  {...register('fullName', {
                    required: true,
                    validate: (value) => isValidEmail(value) || 'Provide a valid email',
                  })}
                />
                {errors.fullName && (
                  <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.fullName.message || `Field is required`}
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="emailAddress"
                  className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  className={
                    errors.emailAddress
                      ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                      : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                  }
                  placeholder="francischijoke001@gmail.com"
                  {...register('emailAddress', {
                    required: true,
                    validate: (value) => isValidEmail(value) || 'Provide a valid email',
                  })}
                />
                {errors.emailAddress && (
                  <span className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.emailAddress.message || `Field is required`}
                  </span>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-400"
                >
                  Phone Number
                </label>
                <div className="w-full flex">
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
              <div className="">
                <label
                  htmlFor="relationship"
                  className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-300"
                >
                  Relationship to Next of Kin
                </label>
                <input
                  type="text"
                  id="relationship"
                  name="relationship"
                  className={
                    errors.relationship
                      ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                      : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                  }
                  placeholder=""
                  {...register('relationship', { required: true })}
                />
                {errors.relationship && (
                  <span className="mt-2 text-sm text-red-600 dark:text-red-500">Field is required</span>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

ProfileContent.propTypes = {};

export default ProfileContent;
