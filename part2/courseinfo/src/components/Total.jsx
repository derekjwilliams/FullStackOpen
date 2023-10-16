const Total = ({course}) => (
  <p style={{ fontWeight: "bold" }}>
    Number of exercises {course.parts.reduce((acc, v) => {
      return acc + v.exercises;
    }, 0)}
  </p>
);
export default Total;
