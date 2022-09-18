import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ({greeting}) => {

  return (
    <>
    <h2>{greeting}</h2>
    <ItemCount initial={1} stock={10} onAdd={() =>{}}/>

    </>
      

  )
}
export default ItemListContainer