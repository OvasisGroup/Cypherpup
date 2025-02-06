import React from 'react'
import Image from "next/image";

const FooterComponent = () => {
  return (
    <section>
      <div className='smedia'>

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
        <div className='smediatwo'>
          <div className='antisocials'>
            <h4>JOIN US ON OUR SOCIAL MEDIA</h4>

            <div className='socialsanti'>
              <div>
                <Image
                  src="/images/SVG/telegram.svg" // Public folder path
                  alt="CypherPup"
                  width={50} // Set width
                  height={50} // Set height
                  priority // Ensures it loads faster
                  layout="intrinsic" // Keeps aspect ratio based on width and height
                  className='responsive-image'
                />
                <p>98k</p>
              </div>
              <div>
                <Image
                  src="/images/SVG/x.svg" // Public folder path
                  alt="CypherPup"
                  width={50} // Set width
                  height={50} // Set height
                  priority // Ensures it loads faster
                  layout="intrinsic" // Keeps aspect ratio based on width and height
                  className='responsive-image'
                />
                <p>98k</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <hr className='lain' />
      <div className='copyrights'>
        <small>
          ©️ 2025 CypherPup. All Rights Reserved.

          CypherPup and its associated trademarks, branding, and digital assets are the intellectual property of MUIAA Ltd. Unauthorized reproduction, distribution, or modification of any content, including but not limited to text, graphics, logos, smart contract code, and tokenomics, is strictly prohibited.

          CypherPup is a community-driven digital asset built on Cypherium. It does not constitute financial or investment advice. Users are responsible for ensuring compliance with Kenyan regulations, including the Capital Markets Act (Cap. 485A), the Data Protection Act (2019), and any relevant guidelines issued by the Central Bank of Kenya (CBK) and the Capital Markets Authority (CMA) regarding digital assets and virtual currencies.

          For inquiries, collaborations, or regulatory concerns, please contact: admin@muiaa.com
          +1-602-7052058
        </small>
      </div>
    </section>
  )
}

export default FooterComponent
