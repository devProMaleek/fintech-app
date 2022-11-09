import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

import ResetPassword from '../../components/Authentication/Register/ResetPassword';

const resetpassword = props => {
  return (
    <>
      <Head>
        <title>Spring Web App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
      </Head>

      <main>
        <ResetPassword />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  )
}

resetpassword.propTypes = {

}

export default resetpassword