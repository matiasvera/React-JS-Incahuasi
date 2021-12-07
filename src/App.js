import './App.css';
import Nav from './components/Nav/Nav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Nav/>

      
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
