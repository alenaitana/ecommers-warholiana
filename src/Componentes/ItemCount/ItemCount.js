import React from 'react'
import { useState } from 'react'
import '../ItemCount/ItemCount.css'


const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)

    const decrease = () => count > initial && setCount(count - 1)

  return (
    <div className='div-container'>
      <text className='textProducto'>Producto</text>
      <button onClick={decrease}>-</button>
      <text className='text1'>{count}</text>
      <button onClick={increase}>+</button>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount