import styles from '../styles/Home.module.css'

import {useEffect, useState} from 'react'

import Listen from '../components/Listen'

export default function ListenPage(props:any) {
  const [file, setFile] = useState('');
  useEffect(() => {
    props.handleActivePageChange('ListenPage')

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
     <Listen/>
  )
}
