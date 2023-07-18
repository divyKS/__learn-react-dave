import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import AddItem from './AddItem'
import Content from './Content'
import SearchItem from './SearchItem'

function App() {
  const API_URL = "http://localhost:3500/items"

  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    // async funtions have to be called in their own async and instantly intiated async
    // but here since it returns nothing it can be called simply too
    // (async()=>await fetchItems())
    setTimeout(() => fetchItems(), 2000); // this jut to simulate if the api is slow


  }, [])

  function addItem(newItem){
    const newID = items.length? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id: newID,
      checked: false,
      item: newItem
    }
    const newItemList = [...items,myNewItem]
    setItems(newItemList)
  }

  function handleChange(id){
    console.log(`Item with id ${id} clicked to check/uncheck`)
    const listItemsUpdated = items.map((item)=>
      (item.id === id) ? {...item, checked: !item.checked} : item
    )
    setItems(listItemsUpdated)  
  }

  function handleDelete(id){
    console.log(`Item with id ${id} is clicked to delete`)
    const listItemsAfterDeletion = items.filter((item)=> item.id !== id )
    setItems(listItemsAfterDeletion)
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
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
          setItems={setItems}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer
        length={items.length} 
      />
    </>
  )

}

export default App
