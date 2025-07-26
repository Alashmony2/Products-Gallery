import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from '@heroui/react'
import { Toaster } from "react-hot-toast";
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './contexts/AuthContext.jsx'
import CartContextProvider from './contexts/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <App />
          <Toaster position="bottom-right" toastOptions={{
            style: {
              background: "#facc15",
              color: "#000",
              fontWeight: "bold"
            },
          }} />
        </CartContextProvider>
      </AuthContextProvider>
    </HeroUIProvider>
  </StrictMode>,
)
