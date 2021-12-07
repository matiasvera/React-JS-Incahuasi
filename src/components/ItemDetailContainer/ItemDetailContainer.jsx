import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemDetailList from "../ItemDetailList/ItemDetailList";

const ItemDetailContainer = () => {
  const [articles, setArticles] = useState([]);
  const productos = [
    {
        id:1,
        Nombre:"Refugios del Bolsón y C° Hielo Azul.",
        img:"https://www.mons-actividades.com/wp-content/uploads/2021/07/IMG_1760-500x310.jpg",
        Dificultad:"Exigente",
        Descripcion:"En esta expedición conoceremos la red de Refugios de Montaña más grande de Sudamérica e intentaremos el ascenso al Cerro Hielo Azul, de 2.254 m.s.n.m. En la comarca de El Bolsón se ubica el Área Natural Protegida Río Azul – Lago Escondido (ANAPRALE) donde se encuentra la red de refugios de montaña interconectados entre sí más grande de Sudamérica. Limitan desde el este con el Río Azul, al oeste con el límite con Chile y al norte con El Manso, hasta el sur con el paralelo 42. Ubicado al pie del Cerro Hielo Azul con sus 2.254 m.s.n.m y frente a una laguna se encuentra el Refugio Natación, rodeado de bosque, ríos y glaciares, generando un paisaje único para conocer. Su carácter de zona agreste y remota junto a sus formaciones boscosas, en buen estado de conservación, la convierten en hábitat de especies emblemáticas como el pájaro carpintero gigante, el pato de los torrentes, el puma, el pudú-pudú, el huemul y el monito del monte, entre otras.",
        Precio:"10.000",
    },

    // {
    //     id:2,
    //     Nombre:"Travesía a los 5.000 m.s.n.m.",
    //     img:"https://www.mons-actividades.com/wp-content/uploads/2018/12/DSCN4616-500x310.gif",
    //     Dificultad:"Muy Exigente",
    //     Descripcion:"TRAVESÍA A LOS 5.000 M.S.N.M. Realizar esta travesía a los 5.000 m.s.n.m. implica completar un recorrido uniendo dos de las cumbres del Cordón del Plata: Los Cerros Franke de 4.822 m.s.n.m. y el Cerro Lomas Amarillas de 5.135 ms.n.m. Esta travesía en el Cordón del Plata representa un desafío particular ya que en una misma jornada se ascenderá más de 1.600 m. de desnivel para alcanzar a unir las cumbres que forman uno de los límites del Valle conocido como Vallecitos.",
    //     Precio:"12.000",
        
    // },

    // {
    //     id:3,
    //     Nombre:"Expedición al Cerro Aconcagua",
    //     img:"https://www.mons-actividades.com/wp-content/uploads/2018/12/20200120_144102-500x310.jpg",
    //     Dificultad:"Muy Exigente",
    //     Descripcion:"En esta expedición intentaremos escalar el Cerro Aconcagua de 6.962 m.s.n.m. , la montaña más alta de América, y la montaña más alta del mundo fuera de los Himalayas. Intentar este ascenso implica conocer el fenómeno Aconcagua, donde se comparte campamento base con una comunidad de montañistas de todo el mundo que vienen a intentar el desafío.",
    //     Precio:"12.000",
        
    // },
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
      <ItemDetailList articles={articles} />
    </div>
  );
};

export default ItemDetailContainer