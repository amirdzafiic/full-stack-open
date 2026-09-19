import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    setPersons(persons.concat({name: newName, number: newNumber}))
    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => setFilter(event.target.value)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const personsToShow = filter 
  ? persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
