import React from 'react'
import NavigationComponent from '../components/NavigationComponent'
import FooterComponent from '../components/FooterComponent'
import { PawPrint } from "lucide-react";
import Image from "next/image";

export default function Milestone() {
    return (
        <section>
            <NavigationComponent />
            <div className='milestonehead'>
                
                <Image
                            src="/images/pakni.png" // Public folder path
                            alt="CypherPup"
                            width={800} // Set width
                            height={285} // Set height
                            priority // Ensures it loads faster
                            layout="intrinsic" // Keeps aspect ratio based on width and height
                            className='responsive-image'
                        />
                        <h1>Our Roadmap</h1>
            </div>
            <div className='timeline'>
                <div className='container left-container'>
                    <div className='text-box'>
                        <Image
                            src="/images/1000090655.png" // Public folder path
                            alt="CypherPup"
                            width={75} // Set width
                            height={81} // Set height
                            priority // Ensures it loads faster
                            layout="intrinsic" // Keeps aspect ratio based on width and height
                            className='responsive-image'
                        />
                        <h2>The Birth of CypherPup</h2>
                        <div>
                            <p><PawPrint size={20} /> IDEATION MEETING</p>
                            <p><PawPrint size={20} /> CREATE SOCIALS</p>
                            <p><PawPrint size={20} /> CONTRACT DEVELOPMENT</p>
                            <p><PawPrint size={20} /> WEBSITE LAUNCH</p>
                        </div>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>

                <div className='container right-container'>
                    <div className='text-box'>
                        <Image
                            src="/images/1000090655.png" // Public folder path
                            alt="CypherPup"
                            width={75} // Set width
                            height={81} // Set height
                            priority // Ensures it loads faster
                            layout="intrinsic" // Keeps aspect ratio based on width and height
                            className='responsive-image'
                        />
                        <h2>Building the Pack&apos;s Playground</h2>
                        <div>
                            <p><PawPrint size={20} /> CONTRACT DEPLOYMENT</p>
                            <p><PawPrint size={20} /> LIQUIDITY POOLS GO LIVE</p>
                            <p><PawPrint size={20} /> FIRST BURN EVENT</p>
                            <p><PawPrint size={20} /> EXPAND MARKETING EFFORTS</p>
                            <p><PawPrint size={20} /> CROSS-CHAIN BRIDGE INTEGRATION</p>
                        </div>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>

                <div className='container left-container'>
                    <div className='text-box'>
                        <Image
                            src="/images/1000090655.png" // Public folder path
                            alt="CypherPup"
                            width={75} // Set width
                            height={81} // Set height
                            priority // Ensures it loads faster
                            layout="intrinsic" // Keeps aspect ratio based on width and height
                            className='responsive-image'
                        />
                        <h2>Expanding the Pack</h2>
                        <div>
                            <p><PawPrint size={20} /> COMMUNITY AIRDROPS</p>
                            <p><PawPrint size={20} /> ESTABLISH PARTNERSHIPS</p>
                            <p><PawPrint size={20} /> GAMIFIED STAKING</p>
                            <p><PawPrint size={20} /> VOTING FOR DAO GOVERNANCE</p>
                            <p><PawPrint size={20} /> LAUNCH MERCHANDISE</p>
                        </div>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>

                <div className='container right-container'>
                    <div className='text-box'>
                        <Image
                            src="/images/1000090655.png" // Public folder path
                            alt="CypherPup"
                            width={75} // Set width
                            height={81} // Set height
                            priority // Ensures it loads faster
                            layout="intrinsic" // Keeps aspect ratio based on width and height
                            className='responsive-image'
                        />
                        <h2>Leading the Pack</h2>
                        <div>
                            <p><PawPrint size={20} /> LAUNCH DAO</p>
                            <p><PawPrint size={20} /> EXCHANGE LISTING</p>
                            <p><PawPrint size={20} /> UNLOCK EXCITING UTILITIES</p>
                            <p><PawPrint size={20} /> CONDUCT SECONDARY AUDITS</p>
                            <p><PawPrint size={20} /> INTEGRATION OF ADVANCED TOKEN UTILITIES</p>
                        </div>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>

                <div className='container left-container'>
                    <div className='text-box'>
                        <Image
                            src="/images/1000090655.png" // Public folder path
                            alt="CypherPup"
                            width={75} // Set width
                            height={81} // Set height
                            priority // Ensures it loads faster
                            layout="intrinsic" // Keeps aspect ratio based on width and height
                            className='responsive-image'
                        />
                        <h2>The Birth of CypherPup</h2>
                        <div>
                            <p><PawPrint size={20} /> IDEATION MEETING</p>
                            <p><PawPrint size={20} /> CREATE SOCIALS</p>
                            <p><PawPrint size={20} /> CONTRACT DEVELOPMENT</p>
                            <p><PawPrint size={20} /> WEBSITE LAUNCH</p>
                        </div>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </section>
    )
}
