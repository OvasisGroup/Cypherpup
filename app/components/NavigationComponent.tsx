'use client';

import React from 'react'
import Image from "next/image";
import { useState, useEffect } from "react";
import { Wallet, AlignJustify } from "lucide-react";

const NavigationComponent = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section className='navigation'>
            <div className='navgat'>
                <div className='navigationheader'>
                    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
                        <Image
                            src="/images/cypherpup-logo.png" // Public folder path
                            alt="Example Image"
                            width={120} // Set width
                            height={46} // Set height
                            priority // Ensures it loads faster
                        />
                        <ul>
                          
                          
                            
                            <li><a href="#">
                            <Wallet size={40} />
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                <AlignJustify size={30} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default NavigationComponent
