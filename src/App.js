import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="Container-fluid">
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
