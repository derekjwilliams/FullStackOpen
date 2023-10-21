import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const clearInputs = () => {
    setNewName('');
    setNewPhoneNumber('');
  }
  
  /**
   * returns the next id, finds the largest id and adds 1 to get the next id
   */
  const getNextId =() => {
    return persons.reduce((a,b)=> (a.id > b.id)? a : b).id + 1
   }

  const addPerson = (event) => {
    event.preventDefault();
    const person = persons.find((person) => person.name === newName)
    if (person === undefined) {
      const newPerson = {
        name: newName,
        number: newPhoneNumber,
        id: getNextId()
      };

      personService.create(newPerson).then((person) => {
        setPersons(persons.concat(person))
        clearInputs('')
      });
    }
    else if (window.confirm(`${person.name} is already added to the phonebook, replace the old number with a new one?`)) {
      const changedPerson = {
        name: person.name,
        number: newPhoneNumber,
        id: person.id
      };
      personService.update(person.id, changedPerson).then((personResult) => {
        setPersons(persons.map(p => p.id !== person.id ? p : personResult))
        clearInputs('')
      });
    }
    else {
      alert(`${newName} is already in phonebook`);
    }
  };

  const deletePerson = (person) => {
    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
      const id = person.id
      personService.deleteById(id).then(() => {
        setPersons(prevPersons => prevPersons.filter(p => p.id !== id))
      })
      .catch(error => {
        alert(`the person '${person}' was not found on the server`)
      })
    }
  }

  const handleDeletePerson=(id) => {
    deletePerson(id)
  }

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
        newName={newName}
        handleAddPerson={addPerson}
        handleNameChange={handleNameChange}
        newPhoneNumber={newPhoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <h3>Numbers</h3>
      <Persons 
        nameFilter={nameFilter} 
        persons={persons} 
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
