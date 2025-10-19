import coursesData from "../assets/data.json";
import RedirectButton from "../components/redirect_button";
import "../styles/courses.css";

export default function Courses() {
  return (
    <section className="courses">
      <h2>Courses</h2>
      <ul className="course-list">
        {coursesData.map((course) => (
          <li key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <RedirectButton path={`/courses/${course.id}`} text={"View course"} />
          </li>
        ))}
      </ul>
    </section>
  );
}
