function ContactMe() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>B. Monroe Consulting</h3>

        <p className="footer-links">
          <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
          <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
        </p>

        <p className="footer-company-name">Monroe Consulting © 2023</p>

        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://onaircode.com/html-css-footer-design-examples/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://onaircode.com/html-css-footer-design-examples/">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>

      <div className="footer-right">
        <p>Contact Us</p>

        <form action="#" method="post">
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
}

export default ContactMe;
