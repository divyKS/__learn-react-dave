import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import AddItem from './AddItem'
import Content from './Content'
import SearchItem from './SearchItem'

function App() {
  const [items, setItems] = useState((localStorage.getItem("stateOfShoppingList"))?JSON.parse(localStorage.getItem("stateOfShoppingList")):"")
  const [search, setSearch] = useState("")

  function addItem(newItem){
    const newID = items.length? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id: newID,
      checked: false,
      item: newItem
    }
    const newItemList = [...items,myNewItem]
    setItems(newItemList)
    localStorage.setItem("stateOfShoppingList", JSON.stringify(newItemList))
  }

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
    localStorage.setItem("stateOfShoppingList", JSON.stringify(listItemsAfterDeletion))
  } 

  const [newItem, setNewItem] = useState("");

  function handleSubmit(e){
    e.preventDefault(); // without this the page would refresh after the submit
    if(!newItem) return; // if nothing was pasted in that and just submitted 
    setNewItem(""); // so that the item can be removed from the add item input
    addItem(newItem);
    console.log("Submitted")
  }

  return (
    <>
      <Header title="Anime"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
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
