import { Navbar } from "@heroui/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx"
import Home from "./pages/Home/Home.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx"
import Login from "./pages/Login/Login.jsx"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import Checkout from "./pages/Checkout/Checkout.jsx"
import ThankYou from "./pages/ThankYou/ThankYou.jsx"

function App() {

  const router =createBrowserRouter([{
    path: "/",element:<Layout/>,children:[
      {index: true, element: <Home/>},
      { path: "product/:id", element: <ProductDetails /> },
      { path: "login", element: <Login /> },
      { path: "checkout", element: <Checkout /> },
      { path: "thankyou", element: <ThankYou /> },
      {path:'cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
      {path:"*",element:<NotFound/>}
    ]
  }])
  return <> 
    <RouterProvider router={router}/>
  </>
  
}

export default App
