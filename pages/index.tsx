import styles from '../styles/Home.module.css'
import Home from "../components/Home"
import localFont from 'next/font/local'
const myFont = localFont({ src: '../fonts/moonraze.otf' })
import Image from "next/image"
import {useEffect} from 'react'


export default function HomePage(props:any) {
  useEffect(() => {
    props.handleActivePageChange('HomePage')

  },[])
  return (
    <div className={styles.container} >
      <main className={styles.main}>

 <Home/>

      </main>


    </div>
  )
}
