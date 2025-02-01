import React from 'react'
import Image from "next/image";

const AboutComponent = () => {
    return (
        <section className='aboutsection'>
            <div className='aboutheader'>
                <h1 className=' animate__animated animate__slideInUp animate__fast'>CypherPup is more than a coin—it&apos;s a community-driven mascot for the blockchain generation. Energetic, loyal, and innovative, CypherPup brings and purpose to crypto.</h1>
                <h2>At the core of the CypherPup ecosystem are three distinct characters, each symbolizing a unique aspect of the project’s vision:</h2>
            </div>
            <div className='cards-section'>
                <div className='card-single'>
                    <div className='card-single-header'>
                        <Image
                            src="/images/doggo.png" // Public folder path
                            alt="Example Image"
                            width={60} // Set width
                            height={95} // Set height
                            priority // Ensures it loads faster
                        />
                        <h3>TechnoPup</h3>
                        <p>A tech-savvy pioneer with neon goggles, representing innovation and the drive to build cutting-edge blockchain solutions</p>
                    </div>
                    <div className='card-single-header'>
                        <Image
                            src="/images/doggo.png" // Public folder path
                            alt="Example Image"
                            width={60} // Set width
                            height={95} // Set height
                            priority // Ensures it loads faster
                        />
                        <h3>HoloPup</h3>
                        <p>The futuristic visionary, boasting holographic fur and glowing circuits, showcasing the advanced technology behind CypherPup</p>
                    </div>
                    <div className='card-single-header'>
                        <Image
                            src="/images/doggo.png" // Public folder path
                            alt="Example Image"
                            width={60} // Set width
                            height={95} // Set height
                            priority // Ensures it loads faster
                        />
                        <h3>CyberPup</h3>
                        <p>The bold explorer, navigating cross-chain opportunities and fostering unity within the blockchain community</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent
