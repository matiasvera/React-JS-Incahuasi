import Item from "../Item/Item";

const ItemList = ({ articles }) => {
    return (
      <div style={{textAlign: "center"}}>
        {articles.map((producto) => (
            <Item key={producto.id} producto={producto} />
        )
      )}
      </div>
    );
  };

export default ItemList
