import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import Form from './components/Form/form';

function App() {

  return (

    <CartContextProvider>

      <BrowserRouter>
        <div className="Container-fluid">
          <header>
            <NavBar />
          </header>
          <body>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='list' element={<ItemListContainer />} />
              <Route path='category/:categoryId' element={<ItemListContainer />} />
              <Route path='detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/Cart' element={< Cart />} />
              <Route path='/Form' element={<Form />} />
            </Routes>
          </body>
        </div>
      </BrowserRouter>

    </CartContextProvider>
  );
}

export default App;
