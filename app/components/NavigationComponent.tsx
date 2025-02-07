'use client';

import React from 'react'
import Image from "next/image";
import { useState, useEffect } from "react";
import { Wallet, AlignJustify } from "lucide-react";
import { useRouter } from "next/navigation"; // Use "next/router" if using Pages Router


const NavigationComponent = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();

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
                            onClick={() => router.push("/")}
                        />
                        <ul>
                            <li><a href="#">
                                <Wallet size={30} />
                            </a>
                            </li>
                            <li>
                                <a href="#">
                                    <AlignJustify size={30} onClick={() => setOpen(!open)} />
                                </a>
                                {open && (
                                    <div className="dropdownMenu">
                                        <button className="dropdownItem" onClick={() => router.push("/milestone")}>Roadmap</button>
                                        <button className="dropdownItem" id="#about">Features</button>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </section>
    )
}

export default NavigationComponent
