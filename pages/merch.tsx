import styles from '../styles/Home.module.css'
import Releases from "../components/Releases"
import localFont from 'next/font/local'
const myFont = localFont({ src: '../fonts/moonraze.otf' })
import Image from "next/image"
import {useEffect} from 'react'

export default function MerchPage(props:any) {
  useEffect(() => {
    props.handleActivePageChange('MerchPage')

  },[])
  return (
    <div className={styles.container} >
      <main className={styles.main}>
<h1 className="text-3xl font-extrabold m-5 ">This is a test for camera access</h1>
      <input style={{display:"none"}}accept="image/*" id="icon-button-file" type="file" capture="environment"/>
      <label htmlFor="icon-button-file" className="bg-gator-blue text-gator-neongreen p-2 font-bold">
Scanner mon document         </label>
      </main>


    </div>
  )
}
