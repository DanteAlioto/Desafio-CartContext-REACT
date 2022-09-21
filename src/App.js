import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart'

function App() {

  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route exact path="/" element = {<Home/>} />
          <Route exact path="/cart" element = {<Cart/>} />
          <Route exact path="/productos" element = {<ItemListContainer/>} />
          <Route exact path="/categoria/:tipo" element = {<ItemListContainer/>} />
          <Route exact path="/productos/:id" element = {<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
