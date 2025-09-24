import React, { useState } from 'react'
import products from './data/products.js'
import Navbar from './components/Navbar.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

export default function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, uid: crypto.randomUUID() }])
  }

  const removeFromCart = (uid) => {
    setCart((prev) => prev.filter((p) => p.uid !== uid))
  }

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif', paddingBottom: '4rem' }}>
      <Navbar count={cart.length} />
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '1rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Tienda React (PFY2201)</h1>
        <p style={{ marginTop: 0, color: '#555' }}>Componentes funcionales + useState + renderizado condicional.</p>
        <ProductList items={products} onAdd={addToCart} />
        <Cart items={cart} onRemove={removeFromCart} />
      </main>
    </div>
  )
}
