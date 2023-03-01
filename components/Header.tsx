import Image from 'next/image'
import localFont from 'next/font/local'
const myFont = localFont({ src: '../fonts/moonraze.otf' })

export default function MyApp() {
  return (

      <a href="/" style={{height:'10vh', position: 'fixed', top: 0,width: '100%',backgroundColor:'#170C5A', zIndex:100}} className="flex items-center">
      <Image
      priority
        src="/image50.png"
        width={177}
        height={100}
        alt="Gator gizz logo : a green aligator"
      />
      <span className={myFont.className} style={{color: "#67D082", fontSize:'30px', paddingTop:'10px'}}> GATOR GiZZ</span>
      </a>


  )
}
