"use client";

import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
    {
        name: "Enock Kipkoech",
        role: "",
        image: "/images/enock.png",
        description: "Innovative blockchain developer pioneering secure, scalable, and decentralized solutions for the future.",
    },
    {
        name: "Monte David",
        role: "",
        image: "/images/monte.png",
        description: "Experienced full-stack developer building modern web apps and blockchain solutions.",
    },
    {
        name: "Pavin Kiptoo",
        role: "",
        image: "/images/pavin.png",
        description: "Blockchain Dev, Full-time Degen with hands-on experience in decentralized finance and cryptocurrency.",
    }
];

const MeettheTeamComponent = () => {
    return (
        <section className='meettheteam'>
            <div className='binca'>
                <h2>Meet The Team</h2>
            </div>
            <div className='meettheteamheader'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    // navigation
                    // pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="rounded-lg shadow-lg"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index} className="p-4 bg-white rounded-lg text-center shadow-md">
                            <div className='team-image'>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200} // Set width
                                    height={200} // Set height
                                    priority // Ensures it loads faster
                                />
                                <h3 className="">{member.name}</h3>
                                <h4 className="">{member.role}</h4>
                                <p>{member.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default MeettheTeamComponent
