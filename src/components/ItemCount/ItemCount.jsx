import React, {useState} from 'react'
import "./styles.css"

const ItemCount = ({stock, initial = 1}) => {
    const [artOnAdd, setOnAdd] = useState(initial);
    const [artStock, setArtStock] = useState(stock)
    let articleNumber = 0;

    const addToCart = () => {
        articleNumber = articleNumber + artOnAdd;
        setArtStock (artStock - articleNumber);
        setOnAdd (0);
        return articleNumber;
    }

    const sumar = () => {
        if (artOnAdd < artStock){
            setOnAdd (artOnAdd + 1)
        }else{
            alert("No hay cupos disponibles");
        }
    }
    const restar = () => {
        if (artOnAdd > 0){
            setOnAdd (artOnAdd - 1)
        }
    }

    return(
        <div className='itemList'>
            <div className='container'>
                <li>Articulo de ejemplo. Cupos disponible: {artStock}</li>
                <button onClick={() => restar()}>-</button>
                <span>{artOnAdd}</span>
                <button onClick={() => sumar()}>+</button>
                <button className='anadir' onClick={() => addToCart()}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
