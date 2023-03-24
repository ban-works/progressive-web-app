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
useEffect(() => {
  console.log('hello');
    fetch(
// "https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ9173QDf&apikey=G4vYwWGcLUpVZfpCj8hjJrUGZi0U0WAf"

      "https://api.songkick.com/api/3.0/artists/4137561/calendar/tourbox.json?apikey=2kPN9eFcrPY9pwv4&per_page=100"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let newEvents = [];
        for (const event of data.resultsPage.results.performance) {

          let newName = event.event.performance[0].displayName;
          if(event.event.performance.length> 1){
            newName = event.event.performance[0].displayName+" + " + event.event.performance[1].displayName
          }
          const newEvent = {
            name: newName,
            venue: event.event.venue.displayName,
            city:event.event.location.city,
            country: event.event.location.city,
            countryCode: event.event.location.city,
            localDate: event.event.start.date,
            localTime: event.event.start.time,
            images: event.images,
            bookingURL: event.event.uri,
          };
          newEvents.push(newEvent);
        }
        // newEvents = newEvents.slice(0, 9);
        setEvents(newEvents);
      });
  }, []);

  const eventsToDisplay = events.map((data: Event, i: number) => {
    return <EventCard {...data} key={i}/>;
  });
  return (
    <div className={styles.container}>
      <div className="bg-gator-pink flex flex-col justify-center items-center pt-12 w-[100vw]">
        <Image
          priority
          src="/image50.png"
          width={455}
          height={256}
          alt="Gator gizz logo : a green aligator"
        />
        <h1
          className={myFont.className}
          style={{
            color: "#170C5A",
            fontSize: "45px",
            lineHeight: "42px",
            textAlign: "center",
            marginTop: "-40px",
          }}
        >
          Welcome to Gator Club
        </h1>
        <h2 className="font-black text-gator-blue">a KGLW fan website</h2>

        <div className="bg-gator-blue mt-4 pt-4" style={{ width: "100%" }}>
          <h2 className="text-left pl-6 text-gator-pink text-3xl font-black">
            NEXT SHOWS
          </h2>
          <div className=" mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-screen">
            {eventsToDisplay}
          </div>
        </div>

      </div>
    </div>
  );
}
