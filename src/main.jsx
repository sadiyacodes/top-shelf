import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-alice-carousel/lib/alice-carousel.css';


import { CartProvider } from './contexts/Cart';
import { AuthProvider } from './contexts/Auth.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <CartProvider>
        <App />
    </CartProvider>
  </AuthProvider>
  </StrictMode>
)
