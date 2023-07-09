import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

function Lineitem({ item, handleChange, handleDelete }){
  return (
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
            aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default Lineitem