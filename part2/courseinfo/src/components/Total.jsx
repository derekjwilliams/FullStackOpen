const Total = ({course}) => (
  <p style={{ fontWeight: "bold" }}>
    total of {course.parts.reduce((acc, v) => {
      return acc + v.exercises;
    }, 0)} exercises
  </p>
);
export default Total;
