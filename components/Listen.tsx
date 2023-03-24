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
  const [events, setEvents] = useState<Event[]>([]);
  let isOffline = useIsOffline();
  // useEffect(() => {
  //   fetch(
  //     // "https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ9173QDf&apikey=G4vYwWGcLUpVZfpCj8hjJrUGZi0U0WAf"
  //     "https://api.songkick.com/api/3.0/artists/4137561/calendar/tourbox.json?apikey=2kPN9eFcrPY9pwv4&per_page=100&jsoncallback=calendar_jqueryJsonpCallback&_=1678100472188"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let newEvents = [];
  //       for (const event of data._embedded.events) {
  //         const newEvent = {
  //           name: event.name,
  //           city: event._embedded.venues[0].city.name,
  //           country: event._embedded.venues[0].country.name,
  //           countryCode: event._embedded.venues[0].country.countryCode,
  //           localDate: event.dates.start.localDate,
  //           localTime: event.dates.start.localTime,
  //           images: event.images,
  //           bookingURL: event.url,
  //         };
  //         newEvents.push(newEvent);
  //       }
  //       newEvents = newEvents.slice(0, 9);
  //       setEvents(newEvents);
  //     });
  // }, []);



  return (
    <div className="h-[100vh] w-[100%] pt-12 bg-gator-lightgreen">
      {/* <div className="bg-gator-pink flex flex-col justify-center items-center w-[100vw]"> */}

        <div
          className="pt-14 pb-48 flex flex-col justify-center items-center "
          style={{ width: "100%" }}
        >
          <h2 className="text-left w-[100%] pl-6 pb-4 text-gator-pink text-3xl font-black ">
            LAST ALBUM
          </h2>
          {!isOffline ? (
            <Spotify link="https://open.spotify.com/album/05ag5ukffFozEnXGOeuTTD?si=kU2nCVhJT2yqw90bUZashw" />
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
