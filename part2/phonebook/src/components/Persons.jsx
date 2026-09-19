const Person = ({name, number}) => <div>{name} {number}</div>

const Persons = ({personsToShow}) => {
    return (
        <div>
            {personsToShow.map(p => <Person key={p.name} name={p.name} number={p.number} />)}
        </div>
    )
}

export default Persons