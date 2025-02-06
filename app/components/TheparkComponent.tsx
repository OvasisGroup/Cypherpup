import React from 'react'
import Image from "next/image";

const TheparkComponent = () => {
    return (
        <section className='thepark'>
            <div className='theparkheader'>
                <div className='parkleft'>
                    <Image
                        src="/images/Cypherium-Logo.png" // Public folder path
                        alt="Example Image"
                        width={200} // Set width
                        height={48} // Set height
                        priority // Ensures it loads faster
                    />
                    <h1>Join the Pack:</h1>
                    <div className='animate__animated fadeInUp'>
                        <h2 className=' animate__animated animate__slideInUp'>CypherPup isn’t just a meme—it’s a movement. Built on Cypherium, powered by innovation,
                            and driven by YOU.</h2>
                    </div>
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
