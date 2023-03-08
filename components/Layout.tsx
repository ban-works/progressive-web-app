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
         
          <Header />
          {children}
          <Footer activePage={activePage} />
        </div>
      );
}

export default Layout;
