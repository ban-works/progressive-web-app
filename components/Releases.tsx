import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

type Release ={
    title: string;
    format?: string;
    label?: string;
    type:string;
    id:number;
    year:number;
}

export default function Releases() {
  const [releases, setReleases] = useState([]);
  useEffect(() => {
    fetch(`https://api.discogs.com/artists/2532180/releases?page=1&per_page=220&sort=year&sort_order=desc`)
      .then((response) => response.json())
      .then((data) => {
        let releasesData = data.releases.sort( (e:Release )=> e.year)
        setReleases(releasesData)
        // setReleases(data.releases.filter((release:{format:string}) => release.format && release.format.includes("LP")))
    });
  }, []);

  let releasesDisplay = releases.map((release:Release, i:number) =>{
    return (
        <div key={i} className="mt-2" >
            <h3 className="text-xl font-bold">{release.title} <span className="font-black">{release.year}</span></h3>
            <p>{release.type === "master" ? "Master" :release.format} {release.label && "by"} {release.label} </p>
            <a href={`https://www.discogs.com/${release.type}/${release.id}`} target="_blank">
            <button className="bg-gator-blue p-2 text-gator-lightpink rounded-lg mt-2 text-xs">


            <FontAwesomeIcon icon={faRecordVinyl} size="sm"/> {" "}
SEE ON DISCOG
            </button>
            </a>

        </div>
    )
  })
  return (
    <div className="p-6 pt-24 pb-36 bg-gator-lightpink w-[100vw] min-h-screen">
<h2 className="text-left text-gator-neongreen text-3xl font-black pt-2 pb-2">
       ALL RELEASES
      </h2>      {releasesDisplay}
    </div>
  );
}
