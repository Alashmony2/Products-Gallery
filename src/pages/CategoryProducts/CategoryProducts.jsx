import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "../../components/Loading/LoadingScreen";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

export default function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategoryProducts = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
      setProducts(data);
    } catch (err) {
      console.error("Failed to load category products:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoryProducts();
  }, [categoryName]);

  if (loading) return <LoadingScreen />;
  if (products.length === 0) {
    return <p className="text-center mt-10 text-red-500">No products found in this category.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white capitalize">
        {categoryName} Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
