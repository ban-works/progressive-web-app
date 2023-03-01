import styles from '../styles/Home.module.css'
import Releases from "../components/Releases"
import localFont from 'next/font/local'
const myFont = localFont({ src: '../fonts/moonraze.otf' })
import Image from "next/image"

export default function ReleasesPage() {
  return (
    <div className={styles.container} >
      <main className={styles.main}>

 <Releases/>

      </main>


    </div>
  )
}
