import Part from "./Part";
const Content = ({ course }) => {
  return (
    <ul style={{ listStyle: "none", padding: "0"}}>
      {course.parts.map((part) => (
        <Part key={part.id} part={part}></Part>
      ))}
    </ul>
  );
};

export default Content;
