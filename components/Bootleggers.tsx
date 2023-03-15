import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from 'next/image'

type Release = {
  title: string;
  format?: string;
  label?: string;
  type: string;
  id: number;
  year: number;
};

export default function Bootleggers() {
  const [releases, setReleases] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.discogs.com/artists/2532180/releases?page=1&per_page=250&sort=year&sort_order=asc`
    )
      //   fetch(`https://api.discogs.com/labels/1397829/releases?page=1&per_page=100&sort=year&sort_order=asc`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let releasesData = data.releases.sort((e: Release) => e.label);
        //   releasesData = releasesData.filter((release:any) => release.artist === "King Gizzard And The Lizard Wizard")
        releasesData = releasesData.filter(
          (release: any) =>
            release.label !== "KGLW" &&
            release.label &&
            !release.label.includes("Not On Label")
        );
        releasesData = releasesData.map(
          (element: { label: string }) => element.label
        );
        let newReleasesData:any = [...new Set(releasesData)];

        console.log(newReleasesData);

        setReleases(newReleasesData);
        // setReleases(data.releases.filter((release:{format:string}) => release.format && release.format.includes("LP")))
      });
  }, []);
  let releasesDisplay = releases.map((label: string, i: number) => {
    return (
      <div key={i} className="mt-2">
        <h3 className="text-xl font-bold">{label}</h3>
      </div>
    );
  });

  //   let releasesDisplay = releases.map((release: Release, i: number) => {
  //     return (
  //       <div key={i} className="mt-2">
  //         <h3 className="text-xl font-bold">
  //           {release.label} <span className="font-black">{release.id}</span>
  //         </h3>
  //         {/* <p>{release.type === "master" ? "Master" :release.format} {release.label && "by"} {release.label} </p>
  //               <a href={`https://www.discogs.com/${release.type}/${release.id}`} target="_blank">
  //               <button className="bg-gator-blue p-2 text-gator-lightpink rounded-lg mt-2 text-xs">

  //               <FontAwesomeIcon icon={faRecordVinyl} size="sm"/> {" "}
  //   SEE ON DISCOG
  //               </button>
  //               </a>*/}
  //       </div>
  //     );
  //   });

  //api.discogs.com/labels/1397829/releases
 return (
    <div className="p-6 pt-24 pb-36 bg-gator-lightgreen w-[100vw] min-h-screen">
        {/* <Image src="/staticwave.svg" height={300} width={3000} alt="wave svg" /> */}
      <h2 className="text-left text-gator-pink text-3xl font-black pt-2 pb-2">
        BOOTLEGGERS{" "}
      </h2>
      {releasesDisplay}
    </div>
  );
}
