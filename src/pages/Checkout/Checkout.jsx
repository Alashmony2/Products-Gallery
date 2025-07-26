
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty!");
      return;
    }

    toast.success("Order placed successfully 🎉");
    setCartItems([]); 
    localStorage.removeItem("cart"); 
    navigate("/thankyou");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Checkout
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-md shadow"
              >
                <div>
                  <h2 className="text-md font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm text-yellow-600 font-bold">${item.price}</p>
                </div>
                <img src={item.image} alt={item.title} className="w-14 h-14 object-contain" />
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center text-xl font-bold mb-6 text-gray-800 dark:text-white">
            <span>Total:</span>
            <span className="text-yellow-600">${total}</span>
          </div>

          <Button color="primary" onPress={handleCheckout} fullWidth>
            Confirm Order
          </Button>
        </>
      )}
    </div>
  );
}
