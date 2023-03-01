import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl, faHatWizard, faH } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
export default function Footer() {
  return (

      <footer style={{height:'15vh', position: 'fixed', bottom: 0,width: '100%',backgroundColor:'#170C5A', zIndex:100}} className={styles.footer} >
       <div className=" w-[50%] h-[10vh] flex justify-around ">
       <a
          href="/releases"

          rel="noopener noreferrer"
          style={{display:'flex', flexDirection:'column'}} className="text-gator-pink">
            <FontAwesomeIcon icon={faRecordVinyl} size="lg"/>
            Releases

            </a>
            <a
          href="/"

          rel="noopener noreferrer"
          style={{display:'flex', flexDirection:'column'}} className="text-gator-pink">
            <FontAwesomeIcon icon={faHatWizard} size="lg"/>

Home
            </a>
       </div>
        <a
          href="https://ban-works.github.io"
          target="_blank"
          rel="noopener noreferrer"
          // style={{display:'flex', flexDirection:'column'}}
          className="text-gator-pink">
          Made with <Image
        src="/image50.png"
        width={88}
        height={50}
        alt="Gator gizz logo : a green aligator"
      /> by Ban

        </a>
      </footer>

  )
}
