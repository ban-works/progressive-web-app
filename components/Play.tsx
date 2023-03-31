import Image from 'next/image'
import {useState, useEffect} from 'react'

export function RiverTop (props: any){
    return (
        <div style={{position:'relative', height:`${props.height}px`, width:'100px', left:`${props.left}px`}} className="bg-gator-pink"></div>
    )
}
export function RiverBottom (props: any){
    console.log(props.top);
    return (
        <div style={{position:'relative', height:`${props.height}px`, width:'100px', top:`${props.top}px`, left:`${props.left}px`}} className="bg-gator-pink"></div>
    )
}

export default function Play () {
        const [gatorXPosition, setGatorXPosition] = useState(300)
        const [gatorYPosition, setGatorYPosition] = useState(300);
        const [gameHasStarted, setGameHasStarted] = useState(false);
        const [xGravity, setXGravity] = useState(2)
        const gameBoardHeight = 500
        const gameBoardWidth = 500

        const [riverXPosition, setRiverXPosition] = useState(150);
        const [riverBottomXPosition, setRiverBottomXPosition] = useState(250);
        const [riverYPosition, setRiverYPosition] = useState(300)
        const obstacleSpeed = 2
        const obstacleWidth= 100

        const jumpHeight = 50
        // const [riverYPosition, setRiverYPosition] = useState(window.innerHeight-250);





    const handleJump = (e:Event) =>{
        if (!gameHasStarted){
            setGameHasStarted(true);
        }
        setGatorXPosition((gatorXPosition)=> gatorXPosition-jumpHeight);

    }
    useEffect(() =>{
        let intervalId:any
        if(gameHasStarted){
            intervalId = setInterval(() =>{
                console.log('X','river: ',riverBottomXPosition, riverXPosition,'gator: ', gatorXPosition);
                console.log('Y','river: ',riverYPosition,'gator: ', gatorYPosition);


                setGatorXPosition(gatorXPosition+xGravity)
                if(riverYPosition >0-obstacleWidth){
                    setRiverYPosition(riverYPosition-obstacleSpeed)
                }
                // else if((riverBottomXPosition < gatorXPosition+200 && gatorYPosition >= riverYPosition-200) || (riverXPosition > gatorXPosition+200 && gatorYPosition >= riverYPosition-200)){
                //     console.log('else if');
                //     setGameHasStarted(false);
                // }
                else {
                    setRiverXPosition(Math.floor(Math.random()*(gameBoardHeight-100)))
                    setRiverYPosition(gameBoardWidth);
                }

            }, 24)

        }

        return () => {
            clearInterval(intervalId);
        }
    },[gatorXPosition, gameHasStarted, riverXPosition])

    // useEffect(() =>{
    //     let obstacleIntervalId:any;
    //     if(gameHasStarted){

    //         obstacleIntervalId = setInterval(() =>{
    //             setRiverXPosition(Math.floor(Math.random()*(gameBoardHeight-100)))

    //         },1000)
    //     }

    //     return () => {
    //         clearInterval(obstacleIntervalId);
    //     }
    // },[gameHasStarted, riverXPosition])

useEffect(() =>{
    setRiverBottomXPosition(riverXPosition+100)
},[riverXPosition])
//     const eventFunction = (e:any)=>{
//         console.log(e, e.key)
//         console.log(gatorXPosition)
//         console.log(gatorYPosition)
//         //DOWN
//         if(e.key === 'ArrowDown'){
//             let newGatorXPosition = gatorXPosition+30
//             setGatorXPosition(newGatorXPosition);
//             return
//         }
//         //UP
//         if(e.key ==='ArrowUp'){
//             let newGatorXPosition = gatorXPosition-30
//             setGatorXPosition(newGatorXPosition);
//             return
//         }
//         //LEFT
//         if(e.key === 'ArrowRight'){
//             setGatorYPosition(gatorYPosition+30);
//             return
//         }
//         //RIGHT
//         if(e.key === 'ArrowLeft'){
//             setGatorYPosition(gatorYPosition-30);
//             return
//         }
//    }
// useEffect(()=>{

//     document.addEventListener("keydown", (event)=>eventFunction(event))
//     return () =>{
//         document.removeEventListener("keydown", eventFunction)
//     }
// },[gatorXPosition, gatorYPosition])


    return (
        <div className="w-[100%] h-[100vh] pt-24 pb-24 p-4 bg-gator-green flex flex-col items-center ">
            <h2 className="text-left w-[100%]  pb-4 text-gator-blue text-3xl font-black ">Play</h2>
            <button onClick={()=>setGameHasStarted(false)}> stop</button>

            <div className="w-[500px] h-[500px] bg-gator-lightpink overflow-hidden " onClick={(e:any)=>handleJump(e)}>
            <img
            // style={{marginTop:`${gatorXPosition}px`, marginLeft:`${gatorYPosition}px`, width:'120px' }}
            style={{position: 'absolute', top:`${gatorXPosition}px`,left:`${gatorYPosition}px`, width:'140px'}}

        src="/image50.png"

        alt="Gator gizz logo : a green aligator"
      />
      <RiverTop height={riverXPosition} left={riverYPosition} />
      <RiverBottom top={riverBottomXPosition-riverXPosition} left={riverYPosition} height = {gameBoardHeight-riverBottomXPosition}/>
            </div>

        </div>
    )
}