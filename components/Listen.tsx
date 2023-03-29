import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/moonraze.otf" });
import { Spotify } from "react-spotify-embed";

import EventCard from "./EventCard";
import useIsOffline from "../hooks/useIsOffline";

export type Event = {
  name: string;
  city: string;
  country: string;
  countryCode: string;
  localTime: string;
  localDate: string;
  images?: {
    fallback: boolean;
    height: number;
    ratio: string;
    url: string;
    width: number;
  }[];
  bookingURL: string;
  venue: string;
};
export default function Home() {
  let isOffline = useIsOffline();



  return (
    <div className="h-[100vh] w-[100%] pt-12 bg-gator-lightgreen">
      {/* <div className="bg-gator-pink flex flex-col justify-center items-center w-[100vw]"> */}

        <div
          className="pt-14 pb-48 flex flex-col justify-center items-center "
          style={{ width: "100%" }}
        >
          <h2 className="text-left w-[100%] pl-6 pt-6 pb-4 text-gator-pink text-3xl font-black ">
            LAST ALBUMS
          </h2>
          {!isOffline ? (
                 <div className="flex gap-6">


            <iframe width="100%" height="400" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1515419395&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

            <iframe width="100%" height="400" scrolling="no"  allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1507867381&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

            <iframe width="100%" height="400" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1505531761&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

            </div>
          ) : (
            <p className="text-left text-gator-blue w-[100%] pl-6">
              You have to be online to listen to songs ...
            </p>
          )}{" "}
        </div>
      </div>
    // </div>
  );
}

// changes spotify working
          // <Spotify link="https://open.spotify.com/album/05ag5ukffFozEnXGOeuTTD?si=kU2nCVhJT2yqw90bUZashw" />
          // ILAM 1 song soundclound iframe working
          // <iframe width="300" height="300" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1351941826&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          // CHANGES albu soundcould iframe working
