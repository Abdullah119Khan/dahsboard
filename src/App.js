import './App.css';
import Sidebar from './component/SideBar/Sidebar';
import TopBar from './component/Topbar/Topbar'
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Users from './Pages/Users/Users';
import User from './Pages/User/User';
import NewUser from './Pages/newUser/NewUser';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';

function App() {
  return (
    <div>
      <TopBar />
      <div className='container'>
       <Sidebar />
       <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/user/:id" element={<User />}/>
        <Route path="/newUser" element={<NewUser />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/newProduct" element={<NewProduct />}/>
       </Routes>
      </div>
    </div>
  );
}

export default App;
