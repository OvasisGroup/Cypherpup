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
                    <p className="bouncer animate__animated animate__slideInDown animate__fast">CypherPup is not just a meme coin—it&apos;s a groundbreaking movement that combines the infectious charm of meme culture with the transformative power of blockchain technology. Designed to lead rather than follow, CypherPup is carving its own trail in the crypto world. </p>
                    <div className='buycypherpage bounce'>
                    <Image
                        src="/images/doggo.png" // Public folder path
                        alt="Example Image"
                        width={60} // Set width
                        height={95} // Set height
                        priority // Ensures it loads faster
                    />
                    <button className='buycypher' >
                        <a href="https://cypherium.com/cypherpup">BUY CPHP PRESALE NOW!</a>
                    </button>
                    </div>
                </div>
                <div className='imagesection bounce'>
                    <Image
                        src="/images/cypherpuppyone.png" // Public folder path
                        alt="Example Image"
                        width={412} // Set width
                        height={533} // Set height
                        priority // Ensures it loads faster
                    />
                </div>

            </div>
        </section>
    )
}

export default HeaderComponent
