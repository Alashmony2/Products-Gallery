import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = () => {
    setIsLoading(true);
    addToCart(product);
    toast.success("Added to cart!");
    setIsLoading(false);
  };

  return (
    <div className="w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg p-4 flex flex-col justify-between">
      <img
        className="h-48 w-full object-contain mb-4 "
        src={product.image}
        alt={product.title}
      />

      <h2 className="text-md font-semibold text-gray-900 dark:text-white line-clamp-2 mb-4">
        {product.title}
      </h2>

      <div className="flex flex-col gap-2 mt-auto">
        <Button
          as={Link}
          to={`/product/${product.id}`}
          color="warning"
          
        >
          View Details
        </Button>

        <Button
          isLoading={isLoading}
          onPress={handleAdd}
          color="default"
          variant="solid"
          startContent={<ShoppingCart className="w-5 h-5" />}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
