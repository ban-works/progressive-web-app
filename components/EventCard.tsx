import React from "react";
import { Event } from "./Home";
import Image from "next/image";

export default function EventCard(props: Event) {

    let time = 0;
  return (
    <a href={props.bookingURL} target="_blank">
    <div className="flex-initial  text-gator-neongreen hover:text-gator-pink justify-center items-center min-h-[320px] min-w-[300px] p-2 bg-gator-pink border-4 border-gator-neongreen  shadow hover:bg-gator-lightgreen dark:bg-gator-pink dark:order-gator-neongreen dark:hover:bg-gator-lightgreen mb-4 mr-4 ">

      <div style={{width: '100%', height: '200px', position: 'relative'}}>

      <Image
        //    className="w-80"
        src={props.images[2].url}
        alt={props.name + props.city + "poster"}
        //   width={props.images[0].width}
        //   height={props.images[0].height}
        // width={500}
        // height={300}
        fill

      />
      </div>
      <h3 className="font-black ">{props.name}</h3>
      <p className=" text-gator-blue font-black ">
     {props.city} ({props.countryCode})
      </p>
      <p className="text-gator-blue">
        {props.localDate} {props.localTime && "//"} {props.localTime?.slice(0,5)}
      </p>

    </div>
    </a>
  );
}
