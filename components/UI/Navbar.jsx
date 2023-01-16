import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from 'flowbite-react';
import PropTypes from 'prop-types';

import Logo from '../../public/assets/svgs/Spring-Logo.svg';

const Navbar = (props) => {
  const currentPath = props.router.pathname;

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex justify-between items-center mx-auto">
          <div className="flex-none pr-8">
            <Link href="/">
              <a className="flex items-center w-auto">
                <Image src={Logo} width="100px" height="60px" className="mr-3 h-6 sm:h-9" alt="Spring Logo" />
              </a>
            </Link>
          </div>
          <div className="flex-none md:order-2">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-4">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
                    </svg>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" />
                    </svg>
                  </div>
                  <Dropdown
                    label={
                      <div className="flex items-center text-sm font-medium text-gray-900 border-2 rounded-md p-1 hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white">
                        <span className="sr-only">Open user menu</span>
                        <div className="bg-primaryBlue flex items-center mr-1 justify-center w-8 h-8 rounded-full">
                          <p className="text-white text-xs">MA</p>
                        </div>
                        Micheal Akintoye
                        <svg
                          className="w-4 h-4 mx-1.5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    }
                    arrowIcon={false}
                    inline={true}
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">Micheal Akintoye</span>
                      <span className="block truncate text-sm font-medium">name@spring.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                  </Dropdown>
                </div>

                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grow pl-10 md:order-1">
            <div className="hidden justify-between items-center w-full md:flex md:w-auto" id="mobile-menu-2">
              <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/dashboard">
                    <a
                      className={`block py-2 px-2 text-primaryTextColor font-nunito font-bold border-b-2 ${
                        currentPath === `/dashboard` ? `border-blue-700 text-blue-700` : `border-transparent`
                      } hover:border-gray-300 hover:text-blue-700 bg-blue-700  md:bg-transparent dark:text-white`}
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/investment">
                    <a
                      className={`block py-2 px-2 text-primaryTextColor font-nunito font-bold border-b-2 ${
                        currentPath.includes('investment') ? `border-blue-700 text-blue-700` : `border-transparent`
                      } hover:border-gray-300 hover:text-blue-700 bg-blue-700  md:bg-transparent dark:text-white`}
                    >
                      Invest
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/transfer">
                    <a
                      className={`block py-2 px-2 text-primaryTextColor font-nunito font-bold border-b-2 ${
                        currentPath.includes('transfer') ? `border-blue-700 text-blue-700` : `border-transparent`
                      } hover:border-gray-300 hover:text-blue-700 bg-blue-700  md:bg-transparent dark:text-white`}
                    >
                      Transfer
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/fund">
                    <a
                      className={`block py-2 px-2 text-primaryTextColor font-nunito font-bold border-b-2 ${
                        currentPath.includes('fund') ? `border-blue-700 text-blue-700` : `border-transparent`
                      } hover:border-gray-300 hover:text-blue-700 bg-blue-700  md:bg-transparent dark:text-white`}
                    >
                      Fund Account
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/bills">
                    <a
                      className={`block py-2 px-2 text-primaryTextColor font-nunito font-bold border-b-2 ${
                        currentPath.includes('bills') ? `border-blue-700 text-blue-700` : `border-transparent`
                      } hover:border-gray-300 hover:text-blue-700 bg-blue-700  md:bg-transparent dark:text-white`}
                    >
                      Pay Bills
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/transactions">
                    <a
                      className={`block py-2 px-2 text-primaryTextColor font-nunito font-bold border-b-2 ${
                        currentPath.includes('transactions') ? `border-blue-700 text-blue-700` : `border-transparent`
                      } hover:border-gray-300 hover:text-blue-700 bg-blue-700  md:bg-transparent dark:text-white`}
                    >
                      Transactions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a
                      className={`block py-2 px-2 text-primaryTextColor font-nunito font-bold border-b-2 ${
                        currentPath == `/referrals` ? `border-blue-700 text-blue-700` : `border-transparent`
                      } hover:border-gray-300 hover:text-blue-700 bg-blue-700  md:bg-transparent dark:text-white`}
                    >
                      Referrals
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
