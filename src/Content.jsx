import { useEffect, useState } from "react"
import {FaTrashAlt} from "react-icons/fa"

function Content(){
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

  useEffect(()=>{
    const savedState = localStorage.getItem("stateOfShoppingList")
    console.log(savedState)
    if(savedState){
      setItems(JSON.parse(savedState))
    }
  }, [])

  // we can use another useEffect that will listen to [items] and update the local storage if the items is changed, so the updation code we can remove from our handleChange function 

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
    <main>
      {/* the style is given as an object so {{}} */}
      {items.length? (
        <ul style={{listStyle: "none", padding: 0}}>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
              onChange={()=>handleChange(item.id)}
              type="checkbox" 
              checked={item.checked} 
            />
            <label
              style={(item.checked)?{textDecoration: "line-through"}: null}
              onDoubleClick={()=>handleChange(item.id)}
            >{item.item}</label> &nbsp;
            {/* <button>Delete</button> */}
            < FaTrashAlt
              // since this has a role button we can add onClick event
              onClick={()=>handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
      ):(
        <p>
          All tasks completed! Great Work!
        </p>
      )}
      
    </main>
  )
}

export default Content