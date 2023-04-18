import './App.css';
import TopBanner from './components/TopBanner.jsx';
import Navigation from './components/Navigation';
import AnimalWallpaper from './components/AnimalWallpaper';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import { useState, useEffect, useRef } from "react";

function App() {

  const [product, setProduct] = useState([])

  const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=20`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
  };
    
  useEffect(() => {
    fetchProducts();
  }, [])
  
  return (
    <div className="App">
      <TopBanner></TopBanner>
      <Navigation></Navigation>
      <AnimalWallpaper></AnimalWallpaper>
      <ProductList products={product}></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;
