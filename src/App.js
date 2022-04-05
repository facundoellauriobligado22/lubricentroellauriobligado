import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCounter/ItemCounter';

function App() {

  const ShowTheCart = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`)
  }

  return (
    <div className="Container-fluid">
      <header>
        <NavBar />
      </header>
      <body>
        <ItemListContainer/>
        {/* <Counter stock={4} initial={0} onAdd={ShowTheCart}/> */}
      </body>
    </div>
  );
}

export default App;
