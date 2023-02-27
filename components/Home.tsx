import React from 'react';
import Image from 'next/image'

export default function Home (){

    return (
        <div>
            <h1>Welcome to Gator Gizz</h1>
            <Image src="/icons/1024.png" width={512} height={512} alt="Gator gizz logo : a green aligator"/>
        </div>
    )
}