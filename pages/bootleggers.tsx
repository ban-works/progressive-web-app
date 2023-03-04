import styles from '../styles/Home.module.css'
import Bootleggers from "../components/Bootleggers"
import localFont from 'next/font/local'
const myFont = localFont({ src: '../fonts/moonraze.otf' })
import Image from "next/image"
import {useEffect} from 'react'

export default function BootleggersPage(props:any) {
  useEffect(() => {
    props.handleActivePageChange('BootleggersPage')

  },[])
  return (
    <div className={styles.container} >
      <main className={styles.main}>

 <Bootleggers/>

      </main>


    </div>
  )
}
