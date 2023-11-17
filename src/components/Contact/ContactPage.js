import React, { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        const handleFocus = function () {
          this.parentElement.querySelector("label").style.transform = "translateY(-20px)";
          this.parentElement.querySelector("label").style.fontSize = "14px";
          this.parentElement.querySelector("label").style.color = "#e1b711";
        };

        const handleBlur = function () {
          if (this.value === "") {
            this.parentElement.querySelector("label").style.transform = "translateY(0)";
            this.parentElement.querySelector("label").style.fontSize = "16px";
            this.parentElement.querySelector("label").style.color = "#d1d0c5";
          }
        };

        const inputFields = document.querySelectorAll(".contact-form .input-field input, .contact-form .input-field textarea");

        inputFields.forEach((inputField) => {
          inputField.addEventListener("focus", handleFocus);
          inputField.addEventListener("blur", handleBlur);
        });
    return () => {
        inputFields.forEach((inputField) => {
            inputField.removeEventListener("focus", handleFocus);
            inputField.removeEventListener("blur", handleBlur);
        });
        };
    }, []);
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
                        <div className="icon"><img src="address-100-yellow.png" alt="Address Icon" /></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>1234 Cty Hwy<br></br>Laurens, NY<br></br>13796</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><img src="phone-500-yellow.png" alt="Address Icon" /></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>(607) 267-7687</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><img src="email-64-yellow.png" alt="Address Icon" /></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>milfordnyzeo@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form method="POST" action="https://www.random.com/">
                        <h2>Send Barb An Email</h2>
                        <div className="input-field">
                            <label>Full Name</label>
                            <input type="text" name="name" required />
                        </div>
                        <div className="input-field">
                            <label>Email</label>
                            <input type="text" name="email" required />
                        </div>
                        <div className="input-field">
                            <label>Message</label>
                            <textarea name="message" required></textarea>
                        </div>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </section>
    )
}