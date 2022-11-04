import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../../components/Dashboard/Navbar';
import Header from '../../components/Dashboard/Header';
import TransactionInsight from '../../components/Dashboard/TransactionInsight';
import InvestmentPackages from '../../components/Dashboard/InvestmentPackages';
import Referral from '../../components/Dashboard/Referral';
import { useRouter } from 'next/router';

export default function Home() {
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
        <Header />
        <TransactionInsight/>
        <InvestmentPackages />
        <Referral />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  );
}
