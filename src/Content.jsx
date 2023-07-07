const Content = () => {
  
  function handleGetName(){
    const names = ["Divy", "Chunmun", "Nikku"]
    const index = Math.floor(Math.random()*3)
    return names[index]
  }

  return (
    <main>
        Hello {handleGetName()}!
    </main>
  )
}

export default Content