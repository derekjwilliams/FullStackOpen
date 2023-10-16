import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName) === undefined) {
      setPersons([
        ...persons,
        { id: persons.length + 1, name: newName, phoneNumber: newPhoneNumber },
      ]);
    } else {
      alert(`${newName} is already in phonebook`);
    }
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };
  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filter={nameFilter}
        handleNameFilterChange={handleNameFilterChange}
      />
      <h3>Ada a new entry</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhoneNumber={newPhoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <h3>Numbers</h3>
      <Persons nameFilter={nameFilter} persons={persons} />
    </div>
  );
};

export default App;
