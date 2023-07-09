import { useEffect, useState } from "react"
import {FaTrashAlt} from "react-icons/fa"
import Itemlist from "./Itemlist"

function Content({ items, setItems, handleChange, handleDelete }){
  // we can't send more things and destrucutre less, so if something is not being used we will have to not send it down

  useEffect(()=>{
    const savedState = localStorage.getItem("stateOfShoppingList")
    console.log(savedState)
    if(savedState){
      setItems(JSON.parse(savedState))
    }
  }, [])
  // we can use another useEffect that will listen to [items] and update the local storage if the items is changed, so the updation code we can remove from our handleChange function 

  return (
    <main>
      {/* the style is given as an object so {{}} */}
      {items.length? (
        <Itemlist
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ):(
        <p>
          All tasks completed! Great Work!
        </p>
      )}
      
    </main>
  )
}

export default Content