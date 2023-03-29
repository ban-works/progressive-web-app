import Image from 'next/image'
import {useState, useEffect} from 'react'
export default function Play () {
        const [gatorXPosition, setGatorXPosition] = useState(300)
        const [gatorYPosition, setGatorYPosition] = useState(300)


    const handleUp = (xPosition:number) =>{
        setGatorXPosition(xPosition-30)
    }
    const handleDown = (xPosition:number) =>{
        setGatorXPosition(xPosition+30)
    }

//     const handleJump = (e) =>{

// console.log(e);
//        handleUp(gatorXPosition);
//        let interval= setInterval( ()=> handleDown(gatorXPosition), 500);
//     //    clearInterval(interval);
//     }

    const eventFunction = (e:any)=>{
        //DOWN
        if(e.keyCode === 40){
            setGatorXPosition(gatorXPosition+30);
            return
        }
        //UP
        if(e.keyCode ===38){
            setGatorXPosition(gatorXPosition+30);
            return
        }
        //LEFT
        if(e.keyCode === 37){
            setGatorXPosition(gatorYPosition+30);
            return
        }
        //RIGHT
        if(e.keyCode === 39){
            setGatorXPosition(gatorYPosition+30);
            return
        }
   }
useEffect(()=>{

    document.addEventListener("keydown", eventFunction)
    return () =>{
        document.removeEventListener("keydown", eventFunction)
    }
},[])


    return (
        <div className="w-[100%] h-[100vh] pt-24 p-4 bg-gator-green flex flex-col items-center ">
            <h2 className="text-left w-[100%]  pb-4 text-gator-blue text-3xl font-black ">Play</h2>
            <div className="w-[80%] h-[80%] bg-gator-lightpink">
            <img
            // onClick={(e)=>handleJump(e)}
            style={{position: 'absolute', top:`${gatorXPosition}px`,left:`${gatorYPosition}px`, width:'140px'}}

        src="/image50.png"

        alt="Gator gizz logo : a green aligator"
      />
            </div>

        </div>
    )
}