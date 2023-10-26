import './App.css'
import { useEffect, useState } from 'react'

const URL = 'http://127.0.0.1:5001'

function App() {
  const [person, setPerson] = useState()

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPerson(data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="App">
      {person && (
        <>
          <h1>{person.name}</h1>
          <h2>{person.gender}</h2>
          <img src={person.photo} width="180" height="45" alt="Onlíner" />
          <h3>{person.photo}</h3>
        </>
      )}
    </div>
  )
}

export default App
