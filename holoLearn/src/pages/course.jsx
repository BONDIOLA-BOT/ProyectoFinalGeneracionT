import { useParams} from "react-router-dom";
import coursesData from "../assets/data.json";
import RedirectButton from "../components/redirect_button"
import "../styles/course.css";

export default function Course() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <section className="course-detail">
        <h2>Course not found</h2>
        <RedirectButton path={"/courses"} text={"Back to courses"}/>
      </section>
    );
  }

  return (
    <section className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div className="course-content">{course.content}</div>
      <RedirectButton path={"/courses"} text={"Back to courses"}/>
    </section>
  );
}