import React from 'react'

const ContactsComponent = () => {
    return (
        <section className='contactsmain'>
            <div className='contacts'>
                <div className='bincat'>
                    <h2>Contact Us</h2>
                    <p>We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                </div>
                
                <form action="" className='contactsheader'>
                    <div className='contacts-left'>
                        <input type="text" placeholder="Enter Name" className="input-field" />
                        <input type="text" placeholder="Enter Email" className="input-field" />
                    </div>
                    <input type="text" placeholder="Enter Subject" className="input-field" />
                    <textarea
                        id="message"
                        className=""
                        rows={5}
                        placeholder="Type your message here..."
                    />
                    <button type="submit" className="button">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default ContactsComponent
