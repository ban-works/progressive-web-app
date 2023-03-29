import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecordVinyl,
  faBars,
  faArrowUp91,
  faArrowDown19,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import ReleaseCard from './ReleaseCard'

export type Release = {
  title: string;
  format?: string;
  label?: string;
  type: string;
  id: number;
  year: number;
  thumb?: string;
};

export default function Releases() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
  const [filter, setFilter] = useState({});
  const [availableFilters, setAvailableFilters] = useState({
    format: [],
    label: [],
    type: [],
  });
  useEffect(() => {
    fetch(
      `https://api.discogs.com/artists/2532180/releases?page=1&per_page=220&sort=year&sort_order=desc&token=YAgEbreXWHpslaWNRJrrBvjHNWhXHtZNjhqkSnLA`
    )
      .then((response) => response.json())
      .then((data) => {
        // let releasesData:Release[] =
        sortReleases(data.releases, "desc")
          // .filter(
          //   (release: any) =>
          //   release.type=== "master"
          //   // release.format.includes('album')
          //     // release.label == "KGLW" ||
          //     // release.label === "Flightless" ||
          //     // // release.label &&
          //     // release.label?.includes("Not On Label")
          // )
          // .sort(function (a: { year: number }, b: { year: number }) {
          //   return a.year < b.year ? 1 : -1;
          // });

        // setReleases(releasesData);
        // setReleases(data.releases.filter((release:{format:string}) => release.format && release.format.includes("LP")))
      });
  }, []);

  const sortReleases = (releases:Release[],order:string) =>{
    console.log('hello')
    let newReleases = [... releases]
    if (order === "desc"){
      setReleases(newReleases.sort(function (a: { year: number }, b: { year: number }) {
        return a.year < b.year ? 1 : -1;
      }));
    }else {
      console.log('hello2')
      // setReleases([])
      setReleases(newReleases.sort(function (a: { year: number }, b: { year: number }) {
        return a.year < b.year ? -1 : 1;
      }));
    }
  }
console.log(releases);

  let releasesDisplay = releases.map((release: Release, i: number) => {
    return (
      <ReleaseCard {...release}/>
      // <div
      //   key={i}
      //   className="flex flex-col w-[100%]  text-gator-green hover:text-gator-blue  p-2 bg-gator-lightpink border-4 border-gator-green  shadow hover:bg-gator-lightgreen dark:bg-gator-pink dark:order-gator-neongreen dark:hover:bg-gator-lightgreen mb-4 mr-4 "
      // >
      //   {release.thumb && (
      //     <img className="sm:h-48 xl:h-96  " src={release.thumb} alt={release.title+" thumbnail"} />
      //   )}

      //   {/* { release.thumb && <Image src={release.thumb} alt="alt" width={200} height={200}/>} */}
      //   <div>
      //     <h3 className="text-xl font-bold">
      //       {release.title} <span className="font-black"> {release.year}</span>
      //     </h3>
      //     <p className=" ">
      //       {release.type === "master" ? "Master" : release.format}{" "}
      //       {release.label && "by"} {release.label}{" "}
      //     </p>
      //     <a
      //       href={`https://www.discogs.com/${release.type}/${release.id}`}
      //       target="_blank"
      //     >
      //       <button className="bg-gator-green hover:bg-gator-pink p-3 pl-5 pr-5 text-gator-lightpink hover:text-gator-blue rounded-lg mt-2 text-l">
      //         <FontAwesomeIcon icon={faRecordVinyl} size="sm" /> SEE ON DISCOG
      //       </button>
      //     </a>
      //   </div>
      // </div>
    );
  });
  return (
    <div className="p-6 pt-24 pb-36 bg-gator-lightpink w-[100vw] min-h-screen">
      {!isFiltersVisible && (
        <div
          className="bg-gator-pink w-10 h-10 rounded-full fixed top-30 right-4 text-gator-blue text-center pt-2 "
          onClick={() => setIsFiltersVisible(!isFiltersVisible)}
        >
          <FontAwesomeIcon icon={faBars} size="sm" />
        </div>
      )}
      {isFiltersVisible && (
        <div className="bg-gator-pink w-48 h-80 rounded-lg  fixed top-30 right-4 text-gator-blue text-center  pt-1 ">
          <div className="w-[100%] flex justify-end pr-3 pt-2">
            <span
              onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              className="rounded-full bg-gator-blue text-gator-pink w-6 font-black "
            >
              X
            </span>
          </div>
          <div className="flex flex-col gap-2 items-start p-3">
            <p className="text-sm cursor-pointer" onClick={()=> sortReleases(releases, "desc")}>
              <FontAwesomeIcon  icon={faArrowUp91} size="xl" /> Sort by year
              desc.
            </p>
            <p className="text-sm cursor-pointer" onClick={()=> sortReleases(releases, "asc")} >
              <FontAwesomeIcon icon={faArrowDown19} size="xl" /> Sort by year
              asc.
            </p>
          </div>
        </div>
      )}
      <h2 className="text-left text-gator-neongreen text-3xl font-black pt-6 pb-2">
        ALL RELEASES
      </h2>
      <div className=" mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-screen">
        {releasesDisplay}
      </div>
    </div>
  );
}
