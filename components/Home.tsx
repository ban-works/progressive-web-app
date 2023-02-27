import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/moonraze.otf" });

type Event = {
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
          };
          console.log(newEvent);
          newEvents.push(newEvent);
        }
        setEvents(newEvents);
      });
  }, []);

  const eventsToDisplay = events.map((data: Event, i: number) => {
    return (
      <div key={i}>
        <Image
          src={data.images[0].url}
          alt={data.name + data.city + "posrt"}
        //   width={data.images[0].width}
        //   height={data.images[0].height}
        width={300}
          height={200}
        />
        <p>{data.name}
</p>
        <p>
        {data.localDate} {data.localTime} - {data.city} - {data.countryCode}
        </p>

      </div>
    );
  });
  return (
    <div className={styles.container}>
      <Image
        src="/image50.png"
        width={455}
        height={256}
        alt="Gator gizz logo : a green aligator"
      />
      <h1
        className={myFont.className}
        style={{ color: "#67D082", fontSize: "45px", textAlign: "center" }}
      >
        Welcome to Gator Gizz
      </h1>
      <div>{eventsToDisplay}</div>
    </div>
  );
}
