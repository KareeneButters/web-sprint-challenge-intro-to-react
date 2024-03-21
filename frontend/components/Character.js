import React, {useState} from 'react'

function Character({data}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
const [showHomeworld, setShowHomeWorld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeWorld(!showHomeworld)
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <button onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */
       showHomeworld ? "Hide Homeworld" : "Show Homeworld"
      }
      </button>
      {showHomeworld && <p>{data.homeworld.name}</p>}
    </div>
  )
}

export default Character
