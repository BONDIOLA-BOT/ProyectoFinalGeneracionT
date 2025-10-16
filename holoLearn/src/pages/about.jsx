import "../styles/about.css";

export default function About() {
  return (
    <>
      <section className="about">
        <h2>About HoloLearn</h2>
        <p>
          HoloLearn was founded to make education accessible for everyone. We
          aim to provide affordable and practical online learning experiences.
        </p>
      </section>
      <section className="about-values">
        <div className="value">
          <h3>Innovation</h3>
          <p>
            We update our content constantly in order to reflect the reality of the tech market.
          </p>
        </div>
        <div className="value">
          <h3>Accesible education</h3>
          <p>
            Thoughtfully crafted courses for any level, with great prices and free material.
          </p>
        </div>
        <div className="value">
          <h3>Community</h3>
          <p>
            We promote the collaboration between students and mentors from all around the world.
          </p>
        </div>
      </section>
    </>
  );
}