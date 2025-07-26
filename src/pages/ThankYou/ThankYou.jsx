import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-yellow-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Your order has been placed successfully. We'll notify you once it's shipped 🚚
      </p>
      <Button color="warning" as={Link} to="/">
        Back to Home
      </Button>
    </div>
  );
}