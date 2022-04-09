import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="Container-fluid">
      <header>
        <NavBar />
      </header>
      <body>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </body>
    </div>
  );
}

export default App;
