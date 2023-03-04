import styles from "../styles/Home.module.css";
import Releases from "../components/Releases";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/moonraze.otf" });
import Image from "next/image";
import { useEffect } from "react";

export default function ReleasesPage(props: any) {
  useEffect(() => {
    props.handleActivePageChange("ReleasesPage");
  }, []);
  return (
    <div className={styles.container}>
      <Releases />
    </div>
  );
}
