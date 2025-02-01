import React from 'react'
import Image from "next/image";

const TheparkComponent = () => {
    return (
        <section className='thepark'>
            <div className='theparkheader'>
                <div className='parkleft'>
                    <h1>Join the Pack:</h1>
                    <h2>CypherPup is Leading the Future </h2>
                    <p>CypherPup is about more than just technology; it&apos;s about building a community that shares a vision for the future. Whether it’s TechnoPup shaping the blockchain, HoloPup illuminating possibilities, or CyberPup uniting the crypto world, CypherPup welcomes everyone to be part of its journey.</p>
                    <h4>This isn’t just a project—it’s a movement. Join the pack, and together, let&apos;s redefine what meme coins can achieve.</h4>
                </div>
                <div className='parkright'>
                    <div className='parkrightbox'>
                        <div className='tickbox'>
                            <h5>DAYS</h5>
                            <h3>24</h3>
                        </div>
                        <div className='tickbox'>
                            <h5>HOURS</h5>
                            <h3>04</h3>
                        </div>
                        <div className='tickbox'>
                            <h5>MINUTES</h5>
                            <h3>38</h3>
                        </div>
                        <div className='tickbox'>
                            <h5>SECONDS</h5>
                            <h3>13</h3>
                        </div>
                    </div>
                    <div className='parkrightboxtwo'>
                        <h5>UNTIL NEXT PRICE INCREASE</h5>
                    </div>
                    <div className='amountraised'>
                        <h3>AMOUNT RAISED: </h3>
                        <h3>$100,000 / $1,000,000</h3>
                    </div>

                    <div className='baton'>
                        <h4>CONNECT WALLET</h4>
                        <Image
                            src="/images/SVG/wallet.svg" // Public folder path
                            alt="Example Image"
                            width={30} // Set width
                            height={30} // Set height
                            priority // Ensures it loads faster
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TheparkComponent
