
import {Release} from './Releases'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function ReleaseCard (props:Release){
return (
    <div
    className="flex flex-col w-[100%]  text-gator-green hover:text-gator-blue  p-2 bg-gator-lightpink border-4 border-gator-green  shadow hover:bg-gator-lightgreen dark:bg-gator-pink dark:order-gator-neongreen dark:hover:bg-gator-lightgreen mb-4 mr-4 "
  >
    {props.thumb && (
      <img className="sm:h-48 xl:h-96  " src={props.thumb} alt={props.title+" thumbnail"} />
    )}

    {/* { props.thumb && <Image src={props.thumb} alt="alt" width={200} height={200}/>} */}
    <div>
      <h3 className="text-xl font-bold">
        {props.title} <span className="font-black"> {props.year}</span>
      </h3>
      <p className=" ">
        {props.type === "master" ? "Master" : props.format}{" "}
        {props.label && "by"} {props.label}{" "}
      </p>
      <a
        href={`https://www.discogs.com/${props.type}/${props.id}`}
        target="_blank"
      >
        <button className="bg-gator-green hover:bg-gator-pink p-3 pl-5 pr-5 text-gator-lightpink hover:text-gator-blue rounded-lg mt-2 text-l">
          <FontAwesomeIcon icon={faRecordVinyl} size="sm" /> SEE ON DISCOG
        </button>
      </a>
    </div>
  </div>
)}