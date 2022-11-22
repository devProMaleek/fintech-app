import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Logo from '../../../public/assets/svgs/Spring-Logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Spinner } from 'flowbite-react';

const VerifyNumber = (props) => {
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
    console.log(Object.values(userData).join(''));
    router.push('/register/setpassword')
  };

  const splitNumber = (event) => {
    let data = event.target.value;
    if (!data) return;
    if (data.length === 1) return;

    popupNext(e.target, data);
    for (let i = 0; i < data.length; i++) {
      inputs[i].value = data[i];
    }
  };

  const popupNext = (element, data) => {
    element.value = data[0];
    data = data.substring(1);
    if (element.nextElementSibling && data.length) {
      popupNext(element.nextElementSibling, data);
    }
  };
  const inputHandler = (event) => {
    let input1 = document.getElementById('otc-1'),
      inputs = document.querySelectorAll('input[type="text"]');

    inputs.forEach(function (input) {
      input.addEventListener('keyup', function (e) {
        if (e.keyCode === 16 || e.keyCode === 9 || e.keyCode === 224 || e.keyCode === 18 || e.keyCode === 17) {
          return;
        }
        if (
          (e.keyCode === 8 || e.keyCode === 37) &&
          this.previousElementSibling &&
          this.previousElementSibling.tagName === 'INPUT'
        ) {
          this.previousElementSibling.select();
        } else if (e.keyCode !== 8 && this.nextElementSibling) {
          this.nextElementSibling.select();
        }
        if (e.target.value.length > 1) {
          splitNumber(e);
        }
      });
      input.addEventListener('focus', function (e) {
        if (this === input1) return;

        // If value of input 1 is empty, focus it.
        if (input1.value === '') {
          input1.focus();
        }

        // If value of a previous input is empty, focus it.
        // To remove if you don't wanna force user respecting the fields order.
        if (this.previousElementSibling.value === '') {
          this.previousElementSibling.focus();
        }
      });
    });
    input1.addEventListener('input', splitNumber);
  };
  return (
    <>
      <section className="bg-primaryBlue h-screen dark:bg-gray-900">
        <nav className="">
          <div className="container flex justify-between items-center h-24 mx-auto">
            <div className="flex items-center space-x-5">
              <svg
                className="w-6 h-6 text-white cursor-pointer"
                fill="currentColor"
                onClick={() => router.back()}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M177.5 98c-8.8-3.8-19-2-26 4.6l-144 136C2.7 243.1 0 249.4 0 256s2.7 12.9 7.5 17.4l144 136c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-88 288 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-288 0 0-88c0-9.6-5.7-18.2-14.5-22z" />
              </svg>
              <h2 className="font-nunito font-bold text-xl text-white">Back</h2>
            </div>
          </div>
        </nav>
        <div className="py-4 px-4 sm:py-16 lg:px-6">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="bg-white my-3 flex items-center space-x-6 h-14 rounded-t-lg px-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primaryBlue flex justify-center items-center w-8 h-8 rounded-full ">
                  <p className="text-white">1</p>
                </div>
                <h5 className="text-primary">Personal Details</h5>
                <span className="">
                  <svg
                    className="w-5 h-5 text-primaryBlue"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white border-2 border-primaryBlue flex justify-center items-center w-8 h-8 rounded-full ">
                  <p className="text-primaryBlue">2</p>
                </div>
                <h5 className="text-primaryBlue">Verifications</h5>
                <span className="">
                  <svg
                    className="w-5 h-5 text-primaryBlue"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white border-2 border-primaryTextPlaceholder flex justify-center items-center w-8 h-8 rounded-full ">
                  <p className="text-primaryTextPlaceholder">3</p>
                </div>
                <h5 className="text-primaryTextPlaceholder">Set Password</h5>
                <span className="">
                  <svg
                    className="w-5 h-5 text-primaryTextPlaceholder"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="bg-white w-5xl p-8 text-center rounded-lg" style={{ width: '45%' }}>
              <div className="">
                <div className="mt-4">
                  <Image src={Logo} width="100px" height="60px" className="mr-3 h-9" alt="Spring Logo" />
                </div>
                <h2 className="py-4 text-2xl font-nunito font-bold">Verify your Mobile Number</h2>
                <div className="my-4 mb-8 text-base font-normal">
                  <p className="text-primaryTextPlaceholder">Enter the six digit code sent to your number</p>
                  <span className="block text-primaryTextColor">+234 808 *** **76</span>
                </div>
                <div
                  className="hidden max-w-lg mx-auto p-4 my-4 text-center text-base text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                >
                  <p className="w-96 mx-auto font-normal">
                    Verification code has been sent to both Whatsapp and Mobile Number
                  </p>
                </div>
                <form action="" method="post" onSubmit={handleSubmit(submitHandler)}>
                  <div className="max-w-lg my-4 mx-auto grid grid-cols-6 justify-items-center border rounded-lg p-6">
                    <input
                      type="text"
                      id="otc-1"
                      maxLength="1"
                      name="input1"
                      className={
                        errors.input1
                          ? `bg-red-50 mx-auto w-12 border border-red-500 text-red-900 placeholder-red-700 text-2xl text-center font-bold rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-3 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                          : `bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                      }
                      {...register('input1', { required: true, onChange: (event) => inputHandler(event) })}
                    />
                    <input
                      type="text"
                      id="otc-2"
                      maxLength="1"
                      name="input2"
                      className={
                        errors.input2
                          ? `bg-red-50 mx-auto w-12 border border-red-500 text-red-900 placeholder-red-700 text-2xl text-center font-bold rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-3 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                          : `bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                      }
                      {...register('input2', { required: true, onChange: (event) => inputHandler(event) })}
                    />
                    <input
                      type="text"
                      id="otc-3"
                      maxLength="1"
                      name="input3"
                      className={
                        errors.input3
                          ? `bg-red-50 mx-auto w-12 border border-red-500 text-red-900 placeholder-red-700 text-2xl text-center font-bold rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-3 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                          : `bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                      }
                      {...register('input3', { required: true, onChange: (event) => inputHandler(event) })}
                    />
                    <input
                      type="text"
                      id="otc-4"
                      maxLength="1"
                      name="input4"
                      className={
                        errors.input4
                          ? `bg-red-50 mx-auto w-12 border border-red-500 text-red-900 placeholder-red-700 text-2xl text-center font-bold rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-3 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                          : `bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                      }
                      {...register('input4', { required: true, onChange: (event) => inputHandler(event) })}
                    />
                    <input
                      type="text"
                      id="otc-5"
                      maxLength="1"
                      name="input5"
                      className={
                        errors.input5
                          ? `bg-red-50 mx-auto w-12 border border-red-500 text-red-900 placeholder-red-700 text-2xl text-center font-bold rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-3 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                          : `bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                      }
                      {...register('input5', { required: true, onChange: (event) => inputHandler(event) })}
                    />
                    <input
                      type="text"
                      id="otc-6"
                      maxLength="1"
                      name="input6"
                      className={
                        errors.input6
                          ? `bg-red-50 mx-auto w-12 border border-red-500 text-red-900 placeholder-red-700 text-2xl text-center font-bold rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-3 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
                          : `bg-gray-200 mx-auto w-12 border border-gray-300 text-gray-900 text-2xl text-center font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
                      }
                      {...register('input6', { required: true, onChange: (event) => inputHandler(event) })}
                    />
                  </div>
                  <div className="my-4 pt-6">
                    <Link href="#">
                      <a href="http://" className="text-primaryDarkPurple text-base font-bold">
                        Resend Code
                      </a>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="my-8 max-w-xs text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Continue
                  </button>
                </form>
                <div className="w-96 h-0.5 bg-gray-200 mx-auto my-6"></div>
                <Link href="#">
                  <a href="http://" className="text-primaryBlue text-base font-normal">
                    Didn&apos;t receive a code?
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

VerifyNumber.propTypes = {};

export default VerifyNumber;
