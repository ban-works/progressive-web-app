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

 <Releases/>

      </main>


    </div>
  )
}