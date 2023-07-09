import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

function App() {
  const [items, setItems] = useState([
    {
      id: 1, 
      checked: false, 
      item: "Item 1"
    }, 
    {
      id: 2,
      checked: false, 
      item: "Item 2"
    }, 
    {
      id: 3, 
      checked: false, 
      item: "Item 3"
    }
  ])

  function handleChange(id){
    console.log(`Item with id ${id} clicked to check/uncheck`)
    const listItemsUpdated = items.map((item)=>
      (item.id === id) ? {...item, checked: !item.checked} : item
    )
    setItems(listItemsUpdated)  
    localStorage.setItem("stateOfShoppingList", JSON.stringify(listItemsUpdated))
  }

  function handleDelete(id){
    console.log(`Item with id ${id} is clicked to delete`)
    const listItemsAfterDeletion = items.filter((item)=> item.id !== id )
    setItems(listItemsAfterDeletion)
    // localStorage.setItem("stateOfShoppingList", JSON.stringify(listItemsAfterDeletion))
  } 

  return (
    <>
      <Header title="Anime"/>
      <Content 
        items={items}
        setItems={setItems}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length} 
      />
    </>
  )

}

export default App
