import React, { useState, useEffect } from "react";

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
console.log(releases)
  useEffect(() => {
    fetch(`https://api.discogs.com/artists/2532180/releases?page=1&per_page=220&sort=year&sort_order=desc`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReleases(data.releases)
        // setReleases(data.releases.filter((release:{format:string}) => release.format && release.format.includes("LP")))
    });
  }, []);

  let releasesDisplay = releases.map((release:Release, i:number) =>{
    return (
        <div key={i} className="mt-2" >
            <h3 className="text-xl font-bold">{release.title} <span className="font-black">{release.year}</span></h3>
            <p>{release.format} {release.label && "by"} {release.label} </p>
            <a href={`https://www.discogs.com/${release.type}/${release.id}`}>See all details on Discog</a>

        </div>
    )
  })
  return (
    <div className="p-6 pt-24 bg-gator-lightpink w-[100vw]">
<h2 className="text-left text-gator-neongreen text-3xl font-black pt-2 pb-2">
       ALL RELEASES
      </h2>      {releasesDisplay}
    </div>
  );
}
