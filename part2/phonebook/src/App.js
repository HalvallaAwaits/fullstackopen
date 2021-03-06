import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("some person");

  const rows = () =>
    persons.map(person => <li key={person.name}>{person.name}</li>);

  const addPerson = event => {
    event.preventDefault();

    if (persons.find(person => person.name === newName)) {
      window.alert(`${newName} already added to the phonebook!`);
    } else {
      setPersons(persons.concat({ name: newName }));
    }

    setNewName("");
  };

  const handlePersonChange = event => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyle: "none" }}>{rows()}</ul>
    </div>
  );
};

export default App;
