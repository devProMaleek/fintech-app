import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../../components/UI/Navbar';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Head from 'next/head';
import TransactionPinForm from '../../../components/Defaults/TransactionPinForm';

const TransactionPin = (props) => {
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
        <TransactionPinForm urlToRoute={'/bills/airtime-data/success'} />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  );
};

TransactionPin.propTypes = {};

export default TransactionPin;
