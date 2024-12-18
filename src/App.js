import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ShowProducts } from './components/ShowProducts';
import  EditProduct  from './components/EditProduct';
import { CreateProduct } from './components/CreateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProducts/>}/>
          <Route path='/create' element={<CreateProduct/>}/>
          <Route path='/edit/:id' element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
