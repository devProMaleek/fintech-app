import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../../components/UI/Navbar';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';
import Breadcrumb from '../../../components/UI/Breadcrumb';
import Airtime from '../../../components/Bills/Airtime';

const Package = (props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Spring Web App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
      </Head>

      <main>
        <Navbar router={router} />
        <Breadcrumb>
          <li className="inline-flex items-center">
            <Link href="/bills">
              <a className="inline-flex items-center font-nunito text-sm font-medium text-primaryTextPlaceholder dark:text-gray-400 dark:hover:text-white">
                Pay Bills
              </a>
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link href={router.pathname === `/bills/airtime-data` ? '#' : `/bills/airtime-data`}>
                <a
                  className={`ml-1 text-sm font-medium font-nunito ${
                    router.pathname === `/bills/airtime-data`
                      ? `text-primaryTextColor cursor-text`
                      : `text-primaryTextPlaceholder cursor-pointer`
                  }  md:ml-2 dark:text-gray-400`}
                >
                  Airtime and Data
                </a>
              </Link>
            </div>
          </li>
        </Breadcrumb>
        <Airtime />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  );
};

Package.propTypes = {};

export default Package;
