import { Navbar } from "@heroui/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx"
import Home from "./pages/Home/Home.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"

function App() {

  const router =createBrowserRouter([{
    path: "/",element:<Layout/>,children:[
      {index: true, element: <Home/>},
      {path:"*",element:<NotFound/>}
    ]
  }])
  return <> 
    <RouterProvider router={router}/>
  </>
  
}

export default App
