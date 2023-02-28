import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/moonraze.otf" });
import { Spotify } from "react-spotify-embed";

import EventCard from "./EventCard";

export type Event = {
  name: string;
  city: string;
  country: string;
  countryCode: string;
  localTime: string;
  localDate: string;
  images: {
    fallback: boolean;
    height: number;
    ratio: string;
    url: string;
    width: number;
  }[];
bookingURL: string;
};
export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ9173QDf&apikey=G4vYwWGcLUpVZfpCj8hjJrUGZi0U0WAf"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data._embedded.events);
        let newEvents = [];
        for (const event of data._embedded.events) {
          console.log(event);
          const newEvent = {
            name: event.name,
            city: event._embedded.venues[0].city.name,
            country: event._embedded.venues[0].country.name,
            countryCode: event._embedded.venues[0].country.countryCode,
            localDate: event.dates.start.localDate,
            localTime: event.dates.start.localTime,
            images: event.images,
            bookingURL: event.url,
          };
          console.log(newEvent);
          newEvents.push(newEvent);
        }
        setEvents(newEvents);
      });
  }, []);

  const eventsToDisplay = events.map((data: Event, i: number) => {
    return <EventCard {...data} />;
  });
  return (
    <div className={styles.container}>
      <div className="bg-gator-pink flex flex-col justify-center items-center pt-12">

      <Image
        priority
        src="/image50.png"
        width={455}
        height={256}
        alt="Gator gizz logo : a green aligator"
      />
      <h1
        className={myFont.className}
        style={{ color: "#170C5A", fontSize: "45px", lineHeight:"42px", textAlign: "center", marginTop:"-40px" }}
      >
        Welcome to Gator Gizz
      </h1>
      <h2 className="font-black text-gator-blue">a KGLW fan website</h2>

    <div className="bg-gator-blue mt-4 pt-4" style={{width:"100%"}}>
      <h2 className="text-left pl-6 text-gator-pink text-3xl font-black">
        NEXT SHOWS
      </h2>
      <div className=" mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >{eventsToDisplay}</div>
    </div>
    <div className="bg-gator-lightgreen p-4 flex justify-center" style={{width:"100%"}}>

    <Spotify link="https://open.spotify.com/album/05ag5ukffFozEnXGOeuTTD?si=kU2nCVhJT2yqw90bUZashw" />
    </div>

      </div>
    </div>
  );
}
