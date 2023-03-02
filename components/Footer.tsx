import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl, faHatWizard, faShirt } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

type Props ={
  activePage?:string
}

export default function Footer({activePage}:Props) {


let firstInactiveClassName = "text-gator-green mr-3"
let firstActiveClassName = "text-gator-pink mr-3"
let inactiveClassName = "text-gator-green mr-3 ml-3"
let activeClassName = "text-gator-pink mr-3 ml-3"
let lastInactiveClassName = "text-gator-green mr-3 ml-3"
let lastActiveClassName = "text-gator-pink mr-3 ml-3"

let homeIconStyle = firstInactiveClassName
if (activePage === "HomePage"){
  homeIconStyle = firstActiveClassName
}

let releasesIconStyle = inactiveClassName
if (activePage === "ReleasesPage"){
  releasesIconStyle = activeClassName
}

let bootleggersIconStyle = inactiveClassName
if (activePage === "BootleggersPage"){
  bootleggersIconStyle = activeClassName
}

let merchIconStyle = lastInactiveClassName
if (activePage === "MerchPage"){
  merchIconStyle = lastActiveClassName
}


  return (
    <footer
      style={{
        // height: "12vh",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#170C5A",
        zIndex: 100,
      }}
      className={styles.footer}
    >
      <div className=" flex justify-around ">
        <a
          href="/"
          rel="noopener noreferrer"
          style={{ display: "flex", flexDirection: "column" }}
          className={homeIconStyle}
        >
          <FontAwesomeIcon icon={faHatWizard} size="lg" />
          Home
        </a>
        <a
          href="/releases"
          rel="noopener noreferrer"
          style={{ display: "flex", flexDirection: "column" }}
          className={releasesIconStyle}
        >
          <FontAwesomeIcon icon={faRecordVinyl} size="lg" />
          Releases
        </a>
        <a
          href="/bootleggers"
          rel="noopener noreferrer"
          style={{ display: "flex", flexDirection: "column" }}
          className={bootleggersIconStyle}
        >
          <FontAwesomeIcon icon={faRecordVinyl} size="lg" />
          Bootleggers
        </a>{" "}
        <a
          href="/merch"
          rel="noopener noreferrer"
          style={{ display: "flex", flexDirection: "column" }}
          className={merchIconStyle}
        >
          <FontAwesomeIcon icon={faRecordVinyl} size="lg" />
          Merch
        </a>
      </div>
      <a
        href="https://ban-works.github.io"
        target="_blank"
        rel="noopener noreferrer"
        // style={{display:'flex', flexDirection:'column'}}
        className="text-gator-pink text-xs"
      >
        Made with
        <Image
          src="/image50.png"
          width={44}
          height={25}
          alt="Gator gizz logo : a green aligator"
        />{" "}
        by Ban
      </a>
    </footer>
  );
}
