import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

import Navbar from '../../components/UI/Navbar';
import Transfer from '../../components/Transfer/Transfer';

const TransferPage = (props) => {
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
        <Transfer />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  );
};

TransferPage.propTypes = {};

export default TransferPage;
