
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import LoginSignUp from './pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Update from './pages/Update';
import ErrorPage404 from './pages/ErrorPage404';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

function App() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    const url = "https://65678e4d64fcff8d7310950f.mockapi.io/All_Products";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  if (error) return <p>Hubo un error al cargar los productos.</p>;

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
    <BrowserRouter>
      <NavBar fetchProductsData={fetchProductsData}/>
        <ReactModal/>
        <Routes>
          <Route path='/' element={<Home products={products}
          fetchProductsData={fetchProductsData}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
          <Route path='*' element={<ErrorPage404/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
