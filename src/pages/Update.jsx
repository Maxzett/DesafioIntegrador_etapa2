import React from 'react'
import ProductForm from '../components/ProductForm/ProductForm';

const Update = () => {
    const fetchProductsData = async () => {
        const url = `${import.meta.env.VITE_BACKEND_URL}product`;
        try{
          const response = await fetch(url);
          const data = await response.json();
          setProducts(data);
          setIsLoading(false)
        }
        catch (error){
          setError(true)    
        }
        if ( error ) return <p>Hubo un error al cargar los productos</p>
        if ( isLoading ) return <p>Cargando...</p>
      }
    
  return (
    <div className='update'>
        <ProductForm fetchData={fetchProductsData}/>
    </div>
  )
}

export default Update