import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../components/Dashboard/Navbar';
import Header from '../components/Dashboard/Header';
import TransactionInsight from '../components/Dashboard/TransactionInsight';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spring Web App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
      </Head>

      <main>
        <Navbar />
        <Header />
        <TransactionInsight/>
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  );
}
