import React from 'react'
import Image from "next/image";

const FooterComponent = () => {
  return (
    <section>
      <div className='smedia'>
        <div className='antisocials'>
          <h4>JOIN US ON OUR SOCIAL MEDIA</h4>

          <div className='socials'>
            <p>98 on</p>
            <Image
              src="/images/SVG/telegram.svg" // Public folder path
              alt="CypherPup"
              width={50} // Set width
              height={50} // Set height
              priority // Ensures it loads faster
              layout="intrinsic" // Keeps aspect ratio based on width and height
              className='responsive-image'
            />
            <p>98 on</p>
            <Image
              src="/images/SVG/x.svg" // Public folder path
              alt="CypherPup"
              width={50} // Set width
              height={50} // Set height
              priority // Ensures it loads faster
              layout="intrinsic" // Keeps aspect ratio based on width and height
              className='responsive-image'
            />


          </div>
        </div>
      </div>
      <div className='footer-container'>

        <div className='footer-left'>
          <Image
            src="/images/cypherpup-logo.png" // Public folder path
            alt="Example Image"
            width={200} // Set width
            height={77} // Set height
            priority // Ensures it loads faster
          />
          <p>
            By participating in the CPHP Token sale, you accept these Terms and Conditions. If you don’t agree, do not purchase CPHP Tokens or use the website. Only buy tokens through official CPHP channels. The CPHP team will never contact you directly with offers.
          </p>
        </div>
        <div className='footer-right'>
          <div className='sides'>
            <h4>GENERAL</h4>
            <p>Home</p>
            <p>WhitePaper</p>
          </div>
          <div className='sides'>
            <h4>CONNECT</h4>
            <p>Join Telegram</p>
            <p>Team</p>
            <p>Features</p>
          </div>
          <div className='sides'>
            <h4>SOCIALS</h4>
            <p>LinkedIn</p>
            <p>X</p>
            <p>Discord</p>
          </div>
        </div>

      </div>
      <div className='copyright'>
        <p>©2025. CypherPup. All rights reserved.</p>
        <p>Terms and Conditions <span>Preview Agreement</span></p>
      </div>
    </section>
  )
}

export default FooterComponent
