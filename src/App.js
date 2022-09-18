import React from "react";
import Header from "./Componentes/Header/Header";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import "./App.css"



const App = () => {

  const saludo = "Bienvenidos a la tienda!!" 

  return (

    <>
    <Header />
    <ItemListContainer  greeting={saludo} />
    
    </>

  )
}
export default App


