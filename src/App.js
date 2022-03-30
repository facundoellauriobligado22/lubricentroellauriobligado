import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="Container-fluid">
      <header>
        <NavBar />
      </header>
      <body>
        <ItemListContainer tittle='Ellauri Obligado Facundo.'/>
      </body>
    </div>
  );
}

export default App;
