import './home_task_3.css'

function Card({person}) {
    return (
        <div className="card">
            <h1 style={{color: 'white', fontSize: '20px', textDecoration: 'overline'}}>{person.name}</h1>
            <h2>{person.role}</h2>
            <p>{person.abilities}</p>
            <span>{person.description}</span>
        </div>
    )
}

function AppMyCard() {
    const data = {
        name: 'Dmitryi',
        role: 'front-end developer',
        abilities: 'HTML, CSS, JavaScript, TypeScript, React',
        description: 'Lorem ipsum dolor sit amet.'
    }

    return (
        <Card person={data}/>
    )
}

export default AppMyCard