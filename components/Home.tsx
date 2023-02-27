import React from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Gator Gizz</h1>
      <Image
        src="/icons/1024.png"
        width={256}
        height={256}
        alt="Gator gizz logo : a green aligator"
      />
    </div>
  );
}
