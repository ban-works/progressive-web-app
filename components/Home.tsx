import React from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import localFont from 'next/font/local'
const myFont = localFont({ src: '../fonts/moonraze.otf' })

export default function Home() {
  return (
    <div className={styles.container}>

        <Image
        src="/image50.png"
        width={455}
        height={256}
        alt="Gator gizz logo : a green aligator"
      />
              <h1 className={myFont.className} style={{color: "#67D082", fontSize:'45px', textAlign:'center'}}>Welcome to Gator Gizz</h1>
              <p> A simple PWA made possible by Next.js</p>
        <div className="bg-black" >


        </div>

    </div>
  );
}
