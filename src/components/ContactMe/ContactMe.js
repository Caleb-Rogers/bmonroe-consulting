function ContactMe() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>B. Monroe Consulting</h3>

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
        <p>Contact Us</p>

        <form action="#" method="post">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="phone" placeholder="Phone Number" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
}

export default ContactMe;
