import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { ERROR_MESSAGES } from '../../utils/services/CardLinkingServices';

const CardLinking = (props) => {
  const {
    meta: { erroredInputs, touchedInputs, focused },
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs({
    errorMessages: ERROR_MESSAGES,
  });

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardPin, setCardPin] = useState({ value: '', isValid: false });

  const cardPinHandler = (event) => {
    const { value } = event.target;
    setCardPin({ value, isValid: value.trim() !== '' && value.length > 4 });
  };

  const handleNextInputFocus = (e) => {
    if (e.target.value.trim() !== '' && focused === 'cvc' && !erroredInputs.cvc) {
      const nextSibling = document.getElementById('cardPin');
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
  };

  const handlePreviousInputFocus = (event) => {
    if (event.target.value.trim() === '') {
      let key = event.keyCode || event.charCode;
      if (key === 8 || key === 46) {
        const previousSibling = document.getElementById('cvc');
        if (previousSibling !== null) {
          previousSibling.focus();
        }
      }
    }
  };

  const reset = () => {
    setCardNumber('');
    setExpiryDate('');
    setCvc('');
    setCardPin({ value: '', isValid: false });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const cardDetails = {
      cardNumber,
      expiryDate,
      cvc,
      cardPin: cardPin.value,
    };
    console.log(cardDetails);
    reset();
  };
  return (
    <>
      <div className="">
        <div className="mt-10 mb-6 ml-6">
          <h2 className="font-bold text-2xl pt-2 pb-6">Card Linking</h2>
          <form className="max-w-lg" onSubmit={submitHandler} method="POST">
            <div className="border mb-8 p-8 rounded-lg">
              <h2 className="pb-6 font-medium font-nunito text-primaryTextColor text-lg">Card Details</h2>
              <div className="mb-2">
                <div className="relative mb-6">
                  <label
                    htmlFor="cardNumber"
                    className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-300"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={cardNumber}
                    className={
                      touchedInputs.cardNumber && erroredInputs.cardNumber
                        ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                        : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                    }
                    {...getCardNumberProps({ onChange: (e) => setCardNumber(e.target.value) })}
                    placeholder="0000 0000 0000 0000"
                  />
                  <div
                    className={`flex absolute ${
                      touchedInputs.cardNumber && erroredInputs.cardNumber ? `inset-y-0` : `bottom-2 `
                    } right-0 items-center pr-3 cursor-pointer`}
                  >
                    <svg
                      className="w-10 h-10 pr-5 pt-3 text-gray-500 dark:text-gray-400"
                      {...getCardImageProps({ images })}
                    />
                  </div>
                  {touchedInputs.cardNumber && erroredInputs.cardNumber && (
                    <span className="mt-2 text-sm text-red-600 dark:text-red-500">{erroredInputs.cardNumber}</span>
                  )}
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-300"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={expiryDate}
                      className={
                        touchedInputs.expiryDate && erroredInputs.expiryDate
                          ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                          : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                      }
                      placeholder="MM/YY"
                      {...getExpiryDateProps({ onChange: (e) => setExpiryDate(e.target.value) })}
                    />
                    {touchedInputs.expiryDate && erroredInputs.expiryDate && (
                      <span className="mt-2 text-sm text-red-600 dark:text-red-500">{erroredInputs.expiryDate}</span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="CVC"
                      className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-300"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      id="CVC"
                      name="CVC"
                      value={cvc}
                      onKeyUp={handleNextInputFocus}
                      className={
                        touchedInputs.cvc && erroredInputs.cvc
                          ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                          : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                      }
                      placeholder="cvc"
                      {...getCVCProps({ onChange: (e) => setCvc(e.target.value) })}
                    />
                    {touchedInputs.cvc && erroredInputs.cvc && (
                      <span className="mt-2 text-sm text-red-600 dark:text-red-500">{erroredInputs.cvc}</span>
                    )}
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="cardPin"
                    className="block mb-2 text-sm font-normal text-primaryGrayText dark:text-gray-300"
                  >
                    PIN
                  </label>
                  <input
                    type="text"
                    id="cardPin"
                    name="cardPin"
                    maxLength={4}
                    value={cardPin.value}
                    onChange={cardPinHandler}
                    onKeyUp={handlePreviousInputFocus}
                    className={
                      cardPin.isValid
                        ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                        : `bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                    }
                    placeholder=""
                  />
                  {cardPin.isValid && (
                    <span className="mt-2 text-sm text-red-600 dark:text-red-500">Card Pin is invalid</span>
                  )}
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mb-8 max-w-md text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update Card Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

CardLinking.propTypes = {};

export default CardLinking;
