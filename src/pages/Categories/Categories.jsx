import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingScreen from "../../components/Loading/LoadingScreen.jsx";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 dark:text-white text-gray-800">
        All Categories
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/category/${encodeURIComponent(cat)}`}
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-center py-4 rounded-md shadow-md text-lg font-semibold capitalize transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}
