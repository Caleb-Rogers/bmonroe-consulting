import React, { useState } from "react"

export default function Contact() {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>Reach out to initiate conversation on the logistics and pricing of
                    your construction project</p>
            </div>
            <div className="container">
                <div className="contact-info">
                    <div className="box">
                        <div className="icon"><img src="address-100-yellow.png" alt="Address Icon" /></div>                        <div className="text">
                            <h3>Address</h3>
                            <p>1234 Cty Hwy,<br></br>Laurens, NY,<br></br>13796</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><img src="phone-500-yellow.png" alt="Address Icon" /></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>123-456-7890</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><img src="email-64-yellow.png" alt="Address Icon" /></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>bmonroe@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form method="POST" action="https://www.random.com/">
                        <h2>Send Message</h2>
                        <div className="input-field">
                            <label>Full Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="input-field">
                            <label>Email</label>
                            <input type="text" name="email" />
                        </div>
                        <div className="input-field">
                            <label>Message</label>
                            <textarea name="message"></textarea>
                        </div>
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}