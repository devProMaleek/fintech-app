import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../../components/UI/Navbar';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Head from 'next/head';
import SuccessTransfer from '../../../components/Bills/SuccessBills';

const SuccessTransferPage = (props) => {
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
        <SuccessTransfer />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  );
};

SuccessTransferPage.propTypes = {};

export default SuccessTransferPage;
