import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import analytics from '../utility/analytics'


export default function MyApp({ Component, pageProps }: AppProps) {

const [activePage, setActivePage] = useState('HomePage');

function handleActivePageChange (page:string){
  setActivePage(page);
}

useEffect(() => {
  analytics.page()
  // this will fire the Page Track function on every new router change.
}, [])

return (
<>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#36977D"/>
        <title>Gator Gizz - A KGLW fan web app</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        {/* <meta name="theme-color" content="#317EFB" /> */}
      </Head>
<Layout activePage={activePage}>

      <Component  {...pageProps} handleActivePageChange={handleActivePageChange}/>
</Layout>
      </>
  )
}
