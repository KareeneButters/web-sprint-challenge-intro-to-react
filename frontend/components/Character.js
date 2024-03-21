import React, {useState} from 'react'

function Character({data}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
const [showHomeworld, setShowHomeWorld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => setShowHomeWorld(!showHomeworld)

  return (
    <div className= "character-card"  onClick={toggleHomeworld}>
      <h2 className="character-name">{data.name}</h2>
      {/* Use the same markup with the same attributes as in the mock */
       showHomeworld && <p className="character-planet">{data.homeworld.name}</p>
      }
    </div>
  )
}

export default Character
