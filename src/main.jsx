import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/poppins'
import './index.css'

// react router
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

// context react
import { CartContextProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
)
