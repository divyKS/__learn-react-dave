const Content = () => {
  
  function handleGetName(){
    const names = ["Divy", "Chunmun", "Nikku"]
    const index = Math.floor(Math.random()*3)
    return names[index]
  }

  function handleClick(){
    console.log("The button was clicked!")
  }

  function handleClick2(name){
    console.log(`${name} was clicked!`)
  }

  function handleClick3(e){
    console.log(e)
    console.log(e.target)
    console.log(e.target.innerHTML)
  }

  return (
    <main>
        <article>
          <p onDoubleClick={handleClick}>
            {/* to click some button and change the name here, we will have to use hook: useState */}
            Hello {handleGetName()}!
          </p>
          {/* here too, we didn't use (), we just passed in the reference to that function */}
          <button onClick={handleClick}>Click Me</button>&nbsp;
          {/* we have to make an anonymous function in jsx to call the function with an argument to avoid immediate execution on rendering */}
          <button onClick={()=>handleClick2("Dave")}>Click Me</button>&nbsp;
          <button onClick={(e)=>handleClick3(e)}>Click Me</button>
        </article>
    </main>
  )
}

export default Content