import "../styles/courses.css";
import data from '../assets/data.json';
const courses = data;

export default function Courses() {
  return (
    <section className="courses">
      <h2>Our Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
