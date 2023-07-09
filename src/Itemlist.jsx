import React from 'react'
import Lineitem from './Lineitem'

function Itemlist({ items, handleChange, handleDelete }){
  return (
    <ul style={{listStyle: "none", padding: 0}}>
        {items.map((item) => (
            <Lineitem
                // TODO:why is key needed to be given here, why is the error each child needs a key coming here
                key={item.id}
                item={item}
                handleChange={handleChange}
                handleDelete={handleDelete}
            />
        ))}
    </ul>
  )
}

export default Itemlist