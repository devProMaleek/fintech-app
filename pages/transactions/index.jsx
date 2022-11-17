import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

import Navbar from '../../components/Dashboard/Navbar';
import Transactions from '../../components/Transactions/Transactions';

const TransactionsPage = props => {
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
        <Transactions />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  )
}

TransactionsPage.propTypes = {

}

export default TransactionsPage
