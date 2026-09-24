const Person = ({ name, number, handleDelete }) => {
  return (
    <div>
      {name} {number} <button onClick={handleDelete}>delete</button>
    </div>
  )
}

const Persons = ({ personsToShow, deletePerson }) => {
  return (
    <div>
      {personsToShow.map(p => (
        <Person 
          key={p.id} 
          name={p.name} 
          number={p.number} 
          handleDelete={() => deletePerson(p.id, p.name)} 
        />
      ))}
    </div>
  )
}

export default Persons