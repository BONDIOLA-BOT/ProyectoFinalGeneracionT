import "../styles/footer.css";
import ContactForm from "./contactform";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>HoloLearn</h3>
          <p>
            Empowering your learning journey with modern, accessible online
            courses.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ContactForm />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HoloLearn — All rights reserved.</p>
      </div>
    </footer>
  );
}
