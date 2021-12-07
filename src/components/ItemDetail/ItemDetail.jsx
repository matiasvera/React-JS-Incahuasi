import React from 'react'
import "./styles.css"

const ItemDetail = ({ producto }) => {

  return (
    <div className='ProductCardDetail'> 
      <h1>{producto.Nombre}</h1>
      <img src={producto.img} />
      <h2>Dificultad: {producto.Dificultad}</h2>
      <p>Descripción: {producto.Descripcion}</p>
      <p>Precio: ${producto.Precio}</p>
    </div>
  );
};

export default ItemDetail