import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import Image from 'next/image'
import localFont from 'next/font/local'
const myFont = localFont({ src: '../fonts/moonraze.otf' })
import styles from '../styles/Home.module.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">

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
      <header style={{height:'10vh', position: 'fixed',
  top: 0,
  width: '100%',backgroundColor:'#170C5A', zIndex:100}} className="flex items-center">
      <Image
        src="/image50.png"
        width={177}
        height={100}
        alt="Gator gizz logo : a green aligator"
      />
      <span className={myFont.className} style={{color: "#67D082", fontSize:'30px', paddingTop:'10px'}}> GATOR GiZZ</span>
      </header>
      <Component  {...pageProps} />
      <footer className={styles.footer} >
        <a
          href="https://ban-works.github.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{display:'flex', flexDirection:'column'}}>
          A test of next-pwa by Ban
          <Image
        src="/image50.png"
        width={88}
        height={50}
        alt="Gator gizz logo : a green aligator"
      />
        </a>
      </footer>
      </ThemeProvider>
  )
}
