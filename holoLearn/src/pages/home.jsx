import "../styles/home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <h1>Welcome to HoloLearn</h1>
        <p>
          Explore online courses crafted to boost your skills and career path.
        </p>
        <button className="cta">
          <NavLink to="/courses">Explore Courses</NavLink>
        </button>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="reviews">
          <div className="review-card">
            <p>
              “HoloLearn helped me transition into web development. The content
              is clear and hands-on!”
            </p>
            <span>— Emma R.</span>
          </div>
          <div className="review-card">
            <p>
              “The React course is top-notch. I landed my first internship thanks
              to the projects I built here.”
            </p>
            <span>— Lucas M.</span>
          </div>
          <div className="review-card">
            <p>
              “I love the design and structure of the platform — it feels simple
              but powerful!”
            </p>
            <span>— Sofia T.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
