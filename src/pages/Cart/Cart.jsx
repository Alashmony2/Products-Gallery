import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "@heroui/react";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-600 dark:text-gray-300 text-xl">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Your Cart
      </h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 rounded-md shadow-md bg-white dark:bg-slate-800"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-md font-semibold text-gray-900 dark:text-white line-clamp-1">
                {item.title}
              </h2>
              <p className="text-yellow-600 font-bold mt-1">${item.price}</p>
            </div>
            <Button
              isIconOnly
              onClick={() => removeFromCart(item.id)}
              color="danger"
              variant="light"
              aria-label="Remove from cart"
            >
              <Trash2 className="w-5 h-5" />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 border-t pt-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Total:
        </h2>
        <span className="text-2xl text-yellow-600 font-bold">
          ${totalPrice}
        </span>
      </div>
    </div>
  );
}
