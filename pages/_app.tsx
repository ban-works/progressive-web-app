import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import Script from 'next/script';
// import analytics from '../utility/analytics'

// import TagManager from 'react-gtm-module'

import { useRouter } from 'next/router'
import { GTM_ID, pageview } from '../lib/gtm'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [activePage, setActivePage] = useState('HomePage');


const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)

    }
  }, [router.events])

function handleActivePageChange (page:string){
  setActivePage(page);
}



return (
<>
<Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
   
<Layout activePage={activePage}>

      <Component  {...pageProps} handleActivePageChange={handleActivePageChange}/>
</Layout>
      </>
  )
}
