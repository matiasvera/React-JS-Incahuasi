import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailList = ({ articles }) => {
    return (
      <div style={{textAlign: "center"}}>
        {articles.map((producto) => (
            <ItemDetail key={producto.id} producto={producto} />
        )
      )}
      </div>
    );
  };

export default ItemDetailList
