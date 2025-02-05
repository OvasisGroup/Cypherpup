import React from 'react'
import "animate.css";
import Image from "next/image";
import { ArrowUpRight, ArrowBigRightDash } from "lucide-react";

const HeaderComponent = () => {
    return (
        <section className='mainheader'>
            <div className='maheader'>
                <div className='namesection'>
                    <h1 className='bouncer animate__animated animate__slideInDown animate__fast'>Meet CypherPup:</h1>
                    <h2 className='bouncer animate__animated animate__slideInDown animate__fast'>The Blockchain&rsquo;s &apos;Goodest Boy&apos;</h2>
                    <p><span>CypherPup isn’t just a meme—</span>it’s a movement. Built on Cypherium, powered by innovation,
                        and driven by YOU.
                        🔥 <span>Join the Pack</span> – Secure Your Spot in CypherPup’s Fair Launch! <ArrowUpRight size={20} /></p>
                    <div className='buycypherpage'>
                        
                       
                    </div>
                    <div className=''>
                        
                        <div className='socials'>
                        <Image
                            src="/images/SVG/telegram.svg" // Public folder path
                            alt="CypherPup"
                            width={50} // Set width
                            height={50} // Set height
                            priority // Ensures it loads faster
                            layout="intrinsic" // Keeps aspect ratio based on width and height
                            className='responsive-image'
                        />
                         <Image
                            src="/images/SVG/x.svg" // Public folder path
                            alt="CypherPup"
                            width={50} // Set width
                            height={50} // Set height
                            priority // Ensures it loads faster
                            layout="intrinsic" // Keeps aspect ratio based on width and height
                            className='responsive-image'
                        />
                         <h4>JOIN US ON OUR
                        <br/>SOCIAL MEDIA</h4>
                        </div>
                    </div>
                    <div className='iconz bounce'>
                    <h4>GET STARTED</h4>
                    <ArrowBigRightDash size={20} />
                    </div>
                </div>
                <div className='imagesection bounce'>
                    <Image
                        src="/images/1000090655.png" // Public folder path
                        alt="CypherPup"
                        width={300} // Set width
                        height={522} // Set height
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
