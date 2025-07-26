import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg p-4 flex flex-col justify-between">
      <img
        className="h-48 w-full object-contain mb-4"
        src={product.image}
        alt={product.title}
      />

      <h2 className="text-md font-semibold text-gray-900 dark:text-white line-clamp-2 mb-3">
        {product.title}
      </h2>

      <Link
        to={`/products/${product.id}`}
        className="inline-block text-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
