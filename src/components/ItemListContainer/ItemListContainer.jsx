import "./styles.css"
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = () => {
    return (
        <div className= "main">
            <h2>Aqui comienza tu aventura</h2>
            <ul>
                <ItemCount stock = {10}/>
            </ul>
        </div>
    )
}

export default ItemListContainer
