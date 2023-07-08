import { useState } from "react"

function Content(){
  // array destructuring that we get from useState
  const [name, setName] = useState("DEFAULT")
  const [count, setCount] = useState(0)

  function handleNameChange(){
    console.log("Button clicked")
    const nameChoices = ["Divy", "Chunmun", "Nikku"]
    const index = Math.floor(Math.random()*3)
    setName(nameChoices[index])
  }

  function handleCount(){
    setCount(count + 1)
    // for the console.log() the value of count remains the same as the one at the time of fn call 
    console.log(count)
  }

  return (
    <main>
        <p>
          Hello {name}! &nbsp;
          <button onClick={handleNameChange}>Change Name</button>
        </p>
        <p>
          Count: {count} &nbsp;
          <button onClick={handleCount}>Increase Count</button>
        </p>
    </main>
  )
}

export default Content