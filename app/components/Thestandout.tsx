import React from 'react'
import Image from "next/image";

const Thestandout = () => {
  return (
    <section className='standout'>
      <section className='middlesection'>
        <div className='dogpicture' >
          <Image
            src="/images/circles.png" // Public folder path
            alt="Example Image"
            width={150} // Set width
            height={163} // Set height
            priority // Ensures it loads faster
            layout="intrinsic" // Keeps aspect ratio based on width and height
          />
        </div>
      </section>
      <div className='standoutpage'>
        <div className='standoutheader'>
          <h1>Why CypherPup Stands Out</h1>
          <p>CypherPup seamlessly blends personality, innovation, and utility, making it a standout in the crowded world of meme coins. Here’s why it’s the next big thing:</p>
        </div>
        <div className='standoutbox'>
          <div className='standoutcard'>
            <h3>For the Meme Enthusiasts</h3>
            <p>Eye-catching, viral-ready mascots and memes designed to entertain while creating value.</p>
          </div>
          <div className='standoutcard'>
            <h3>For the Tech Innovators</h3>
            <p>Built on Cypherium&apos;s blockchain, CypherPup offers lightning-fast transactions, cross-chain compatibility, and the scalability needed for a future-proof ecosystem.s</p>
          </div>
          <div className='standoutcard'>
            <h3>For the Visionaries</h3>
            <p>CypherPup is more than a meme—it&apos;s a token with real-world utility, integrating NFTs, DeFi, and decentralized exchange (DEX) functionality to unlock new possibilities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thestandout
