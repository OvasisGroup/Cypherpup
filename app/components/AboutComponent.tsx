import React from 'react'
import Image from "next/image";

const AboutComponent = () => {
    return (
        <section className='aboutsection'>

            <div className='cards-section'>
                <div className='card-single'>
                    <div className='card-single-header animate__animated fadeInUp'>
                        <Image
                            src="/images/1000090655.png" // Public folder path
                            alt="Example Image"
                            width={80} // Set width
                            height={142.5} // Set height
                            priority // Ensures it loads faster
                        />
                        <h3>TechnoPup</h3>
                        <h4>Smart Contracts & DeFi Innovation</h4>
                        <p>TechnoPup powers secure, high-speed smart contracts that drive staking, liquidity pools, and
yield-generating mechanics, ensuring CypherPup remains stable, decentralized, and fair for all
participants in the ecosystem.</p>
                    </div>
                    <div className='card-single-header animate__animated fadeInUp'>
                        <Image
                            src="/images/doggo.png" // Public folder path
                            alt="Example Image"
                            width={90} // Set width
                            height={142.5} // Set height
                            priority // Ensures it loads faster
                        />
                        <h3>HoloPup</h3>
                        <h4>AI, NFTs & Digital Ownership</h4>
                        <p>HoloPup is at the forefront of NFTs, tokenized assets, and metaverse interactions, integrating
AI-driven automation and transparency to enhance verifiable ownership, digital collectibles, and
blockchain-based identity solutions.</p>
                    </div>
                    <div className='card-single-header animate__animated fadeInUp'>
                        <Image
                            src="/images/doggo.png" // Public folder path
                            alt="Example Image"
                            width={90} // Set width
                            height={142.5} // Set height
                            priority // Ensures it loads faster
                        />
                        <h3>CyberPup</h3>
                        <h4>Cross-Chain Interoperability & Scalability</h4>
                        <p>CyberPup enables frictionless cross-chain functionality, ensuring that CypherPup can
seamlessly integrate with multiple blockchains, enhancing accessibility, expanding market
reach, and increasing overall liquidity.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent
