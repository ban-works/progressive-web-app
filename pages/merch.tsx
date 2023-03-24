import styles from '../styles/Home.module.css'
import Releases from "../components/Releases"
import localFont from 'next/font/local'
const myFont = localFont({ src: '../fonts/moonraze.otf' })
import Image from "next/image"
import {useEffect, useState} from 'react'

export default function MerchPage(props:any) {
  const [file, setFile] = useState('');
  useEffect(() => {
    props.handleActivePageChange('MerchPage')

  },[])

  const handleUpload = (e:any) => {
    if (e.target.files){
      const file = e.target.files[0]
      const newUrl = URL.createObjectURL(file);
      setFile(newUrl)
    }
  }

  // const [source, setSource] = useState("");
  // const handleCapture = (target) => {
  //   if (target.files) {
  //     if (target.files.length !== 0) {
  //       const file = target.files[0];
  //       const newUrl = URL.createObjectURL(file);
  //       setSource(newUrl);
  //     }
  //   }
  // };
  return (
    <div className={styles.container} >
      <main className={styles.main}>
<h1 className="text-3xl font-extrabold m-5 ">This is a test for camera access</h1>
      <input style={{display:"none"}}accept="image/*" id="icon-button-file" type="file" capture="environment" onChange={(e)=>handleUpload(e)}/>
      <label htmlFor="icon-button-file" className="bg-gator-blue text-gator-neongreen p-2 font-bold">
Scanner mon document         </label>

{ file && <img src={file} alt={"snap"}></img>}

      </main>
    </div>
  )
}
