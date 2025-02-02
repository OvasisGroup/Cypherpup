import React from 'react'
import "animate.css";
import Image from "next/image";

const HeaderComponent = () => {
    return (
        <section className='mainheader'>
            <div className='maheader'>
                <div className='namesection'>
                    <h1 className='bouncer animate__animated animate__slideInDown animate__fast'>Meet CypherPup:</h1>
                    <h2 className='bouncer animate__animated animate__slideInDown animate__fast'>The Blockchain&rsquo;s &apos;Goodest Boy&apos;</h2>
                    <p><span>CypherPup isn’t just a meme—</span>it’s a movement. Built on Cypherium, powered by innovation,
                    and driven by YOU.</p>
                    <p>🔥 Join the Pack – Secure Your Spot in CypherPup’s Fair Launch! 🚀</p>
                    <div className='buycypherpage bounce'>
                    <button className='buycypher' >
                        <a href="">Buy CPHP Now!</a>
                    </button>
                    </div>
                </div>
                <div className='imagesection bounce'>
                    <Image
                        src="/images/sideimage.png" // Public folder path
                        alt="CypherPup"
                        width={541} // Set width
                        height={601} // Set height
                        priority // Ensures it loads faster
                        layout="intrinsic" // Keeps aspect ratio based on width and height
                        className='responsive-image'
                    />
                </div>

            </div>
        </section>
    )
}

export default HeaderComponent
