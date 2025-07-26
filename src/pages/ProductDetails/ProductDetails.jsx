import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import LoadingScreen from "../../components/Loading/LoadingScreen.jsx";
import { CartContext } from "../../contexts/CartContext.jsx";
import { Button } from "@heroui/react";
import { toast } from "react-hot-toast";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, cartItems } = useContext(CartContext);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      toast("Already in cart", {
        icon: "🛒",
        style: {
          background: "#facc15",
          color: "#000",
          fontWeight: "bold",
        },
      });
      return;
    }

    addToCart(product);
    toast.success("Added to cart", {
      icon: "🛍️",
    });
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) return <LoadingScreen />;
  if (!product)
    return (
      <p className="text-center mt-10 text-red-500">Product not found</p>
    );

  return (
    <div className="my-10 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {product.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {product.description}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
            Category:{" "}
            <span className="capitalize font-medium">{product.category}</span>
          </p>

          <p className="text-2xl font-bold text-yellow-600 dark:text-white mb-2">
            ${product.price}
          </p>

          <div className="flex items-center gap-1 my-3">
            {[1, 2, 3, 4, 5].map((rate, index) =>
              product.rating?.rate >= rate ? (
                <svg
                  key={index}
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ) : (
                <svg
                  key={index}
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )
            )}
            <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm">
              {product.rating?.rate} / 5 ({product.rating?.count} reviews)
            </span>
          </div>

          {/* زرار Add to Cart */}
          <div className="mt-6">
            <Button
              onClick={handleAddToCart}
              color="secondary"
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
