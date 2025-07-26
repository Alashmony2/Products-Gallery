import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

export default function Home() {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async()=>{
    try {
      const {data} = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);      
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

    if (loading) return <Loading/>;

  return <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </>
}
