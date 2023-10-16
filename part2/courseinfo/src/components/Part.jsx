const Part = ({ part }) => (
  <li style={{ listStyle: "none", padding: "0.2rem 0"}}>
    {part.name} {part.exercises}
  </li>
);

export default Part;
