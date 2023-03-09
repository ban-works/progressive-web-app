import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";


type Props = {
  children?: ReactNode;
  title?: string;
  activePage?:string;
};

const Layout = ({ children, title = "This is the default title", activePage }: Props)=>  {
    return  (
        <div>
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
          <Header />
          {children}
          <Footer activePage={activePage} />
        </div>
      );
}

export default Layout;
