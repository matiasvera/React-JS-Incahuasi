import React from 'react'
import "./styles.css"

const Item = ({ producto }) => {
    return (
      <div className='ProductCard'> 
        <h1>{producto.Nombre}</h1>
        <img src={producto.img} />
        <h2>Dificultad: {producto.Dificultad}</h2>
        <button>Ver más</button>
      </div>
    );
  };

export default Item
