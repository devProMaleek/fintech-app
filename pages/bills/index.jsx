import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

import Navbar from '../../components/UI/Navbar';
import Bills from '../../components/Bills/bills';

const BillsPage = (props) => {
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
        <Bills />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  );
};

BillsPage.propTypes = {};

export default BillsPage;
