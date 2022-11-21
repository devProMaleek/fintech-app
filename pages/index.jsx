import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

import SignUp from '../components/Authentication/Register/SignUp';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Spring Web App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
      </Head>

      <main className='scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primaryBlue/80'>
        <SignUp />
      </main>

      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
    </>
  );
}


