// ContactPage.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Contact() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
      } = useForm();
    const [successMessage, setSuccessMessage] = useState("");

    function onSubmit(data) {
        axios
          .post("https://eow6tlxc2ivnglb.m.pipedream.net", data)
          .then((response) => {
            setSuccessMessage(
              `Thanks for signing up! Check your inbox for updates 😊`
            );
          })
          .catch((e) => console.error(e));
    }

    useEffect(() => {
        const handleFocus = function () {
          this.parentElement.querySelector("label").style.transform = "translateY(-20px)";
          this.parentElement.querySelector("label").style.fontSize = "1.3rem";
          this.parentElement.querySelector("label").style.color = "#e1b711";
        };

        const handleBlur = function () {
          if (this.value === "") {
            this.parentElement.querySelector("label").style.transform = "translateY(0)";
            this.parentElement.querySelector("label").style.fontSize = "2rem";
            this.parentElement.querySelector("label").style.color = "#909090";
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
        <main className="contact-main">
            <div className="contact-container">
                <div className="contact-text">
                    <h2 className="contact-heading">Contact Us</h2>
                    <p className="contact-sub-heading">
                        Reach out to initiate conversation on the logistics and pricing of
                        your construction project
                    </p>
                </div>
                <div className="contact-cta">
                    <div className="contact-main-left">
                        <div className="contact-box">
                            <div className="contact-icon"><img src="address-100-yellow.png" alt="Address Icon" /></div>
                            <div className="contact-details">
                                <h4 className="contact-title">Location</h4>
                                <p className="contact-desc">Laurens, NY, 13796<br></br>Otsego County</p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-icon"><img src="phone-500-yellow.png" alt="Address Icon" /></div>
                            <div className="contact-details">
                                <h4 className="contact-title">Phone</h4>
                                <p className="contact-desc">(607) 267-7687</p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-icon"><img src="email-64-yellow.png" alt="Address Icon" /></div>
                            <div className="contact-details">
                                <h4 className="contact-title">Email</h4>
                                <p className="contact-desc">bmonroeconsulting@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-main-right">
                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="contact-form-heading">Send Barb An Email</h3>
                            <div className="input-field">
                                <label>Full Name</label>
                                <input {...register("name")} type="text" name="name" required ></input>
                            </div>
                            <div className="input-field">
                                <label>Email</label>
                                <input {...register("email")} type="text" name="email" required ></input>
                            </div>
                            <div className="input-field">
                                <label>Message</label>
                                <textarea {...register("message")} type="text" name="message" required ></textarea>
                            </div>
                            <div className="contact-send-btn">
                                <button role="submit">{isSubmitting ? "SENDING" : "SEND"}</button>
                                    {successMessage && <p>{successMessage}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}