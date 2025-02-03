import React from 'react'
import "animate.css";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const HeaderComponent = () => {
    return (
        <section className='mainheader'>
            <div className='maheader'>
                <div className='namesection'>
                    <h1 className='bouncer animate__animated animate__slideInDown animate__fast'>Meet CypherPup:</h1>
                    <h2 className='bouncer animate__animated animate__slideInDown animate__fast'>The Blockchain&rsquo;s &apos;Goodest Boy&apos;</h2>
                    <p><span>CypherPup isn’t just a meme—</span>it’s a movement. Built on Cypherium, powered by innovation,
                    and driven by YOU.</p>
                    
                    <div className=''>
                    <Image
                        src="/images/telegram.png" // Public folder path
                        alt="CypherPup"
                        width={337} // Set width
                        height={50} // Set height
                        priority // Ensures it loads faster
                        layout="intrinsic" // Keeps aspect ratio based on width and height
                        className='responsive-image'
                    />
                </div>
                    <div className='buycypherpage'>
                    <ArrowUpRight size={30} />
                    <p>🔥 Join the Pack – Secure Your Spot in CypherPup’s Fair Launch! 🚀</p>
                    </div>
                </div>
                <div className='imagesection bounce'>
                    <Image
                        src="/images/sideimage.png" // Public folder path
                        alt="CypherPup"
                        width={475} // Set width
                        height={528} // Set height
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
