import "./styles.css"
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [articles, setArticles] = useState([]);
  const productos = [
    {
        id:1,
        Nombre:"Refugios del Bolsón y C° Hielo Azul.",
        img:"https://www.mons-actividades.com/wp-content/uploads/2021/07/IMG_1760-500x310.jpg",
        Dificultad:"Exigente",
    },

    {
        id:2,
        Nombre:"Travesía a los 5.000 m.s.n.m.",
        img:"https://www.mons-actividades.com/wp-content/uploads/2018/12/DSCN4616-500x310.gif",
        Dificultad:"Muy Exigente",
        
    },

    {
        id:3,
        Nombre:"Expedición al Cerro Aconcagua",
        img:"https://www.mons-actividades.com/wp-content/uploads/2018/12/20200120_144102-500x310.jpg",
        Dificultad:"Muy Exigente",
        
    },
  ];

  console.log(articles);
  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  useEffect(() => {
    const list = getItems();
    list.then((list) => {
      setArticles(list);
    });

    return () => {
      setArticles([]);
    };
  }, []);

  return (
    <div className="ItemListContainer">
      <ItemList articles={articles} />
    </div>
  );
};

export default ItemListContainer;
