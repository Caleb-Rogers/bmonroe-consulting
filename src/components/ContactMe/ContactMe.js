function ContactMe() {
  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, phone, message } = event.target.elements;
    const subject = `Contact Form: ${name.value} - ${message.value.substring(
      0,
      50
    )}`;
    const body = `Name: ${name.value}\nEmail: ${email.value}\nPhone: ${phone.value}\n\nMessage: ${message.value}`;
    const mailtoUrl = `mailto:contact@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <footer className="footer-distributed">
      {/* ... */}
      <div className="footer-left">
        <h3>B. Monroe Consulting</h3>
        <p className="footer-company-name">Phone: 607-287-4577 </p>
        <p className="footer-company-name">Email: milfordnyzeo@gmail.com</p>
        <p className="footer-company-name">Monroe Consulting © 2023</p>

        <div className="footer-icons">
          <a href="https://www.facebook.com/barb.monroe.18">
            <i className="fa fa-facebook"></i>
          </a>

          <a href="https://www.linkedin.com/in/barbara-monroe-6088439a/">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer-right">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
}

export default ContactMe;
