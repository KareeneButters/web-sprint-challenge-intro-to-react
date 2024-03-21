import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [planetsData, setPlanetsData] = useState([]);
  const [peopleData, setPeopleData] = useState([])

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    axios.get(urlPlanets)
    .then(res => setPlanetsData(res.data))
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get(urlPeople)
    .then(res => setPeopleData(res.data))
    .catch(err => console.log(err))
  }, [])
  
  useEffect(() => {
    Promise.all([
      axios.get(urlPlanets),
      axios.get(urlPeople)
    ])
    .then(([planetsResponse, peopleResponse]) => {
      const planetMap = planetsResponse.data.reduce((map, planet) => {
        map[planet.id] = planet.name
        return map
      }, {})

      const peopleWithPlanets = peopleResponse.data.map(person => {
        return {...person, homeworld: planetMap[person.homeworld]}
      })
      setPlanetsData(planetsResponse.data)
      setPeopleData(peopleWithPlanets)
    })

    .catch(err => console.log(err))

  }, [])


  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
        peopleData.map((character, index) => (
          <Character key={index} data={character} />
        ))
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
