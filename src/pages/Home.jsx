import React, { useEffect, useState} from 'react'
import Header from '../components/Header/Header'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'


const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductsData();
  },[]);

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
    <div>
      <Header/>
      <NewCollections
        products={products}
        fetchProductsData={fetchProductsData}
      />
      <NewsLetter/>
    </div>
  )
}

export default Home
