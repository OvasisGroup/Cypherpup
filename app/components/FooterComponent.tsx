import React from 'react'
import Image from "next/image";

const FooterComponent = () => {
  return (
    <section>
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
    </section>
  )
}

export default FooterComponent
