import React from 'react'
import Image from "next/image";

const MiddleComponent = () => {
    return (
        <section className='middlesection'>
        <div className='dogpicture' >
            <Image
                src="/images/circles.png" // Public folder path
                alt="Example Image"
                width={150} // Set width
                height={163} // Set height
                priority // Ensures it loads faster
            />
        </div>
        </section>
    )
}

export default MiddleComponent
