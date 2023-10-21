import Person from "./Person";
const Persons = ({ nameFilter, persons }) => {
  const castInsensitiveNameFilter = nameFilter.trim().toLowerCase();
  return (
    <ul style={{ listStyle: "none" }}>
      {persons
        .filter((p) =>
          p.name.trim().toLowerCase().includes(castInsensitiveNameFilter)
        )
        .map((person) => (
          <Person key={person.name} person={person} />
        ))}
    </ul>
  );
};
export default Persons;
