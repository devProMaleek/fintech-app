import React from 'react'
import PropTypes from 'prop-types'
import Login from '../../components/Authentication/Login/Login'
import Head from 'next/head';
import Script from 'next/script';

const index = props => {
  return (
    <>
     <Head>
        <title>Spring Web App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
      </Head>

      <main>
        <Login />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" /> 
    </>
  )
}

index.propTypes = {

}

export default index
