import "../styles/footer.css";
import ContactForm from "./contactform";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HoloLearn — All rights reserved.</p>
      </div>
    </footer>
  );
}
