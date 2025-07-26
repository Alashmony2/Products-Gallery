import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HeroUIProvider} from '@heroui/react'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HeroUIProvider>
  </StrictMode>,
)
