import styled from 'styled-components';
import './App.css'
import { useEffect, useState } from 'react';
import CartButton from './components/Cart/CartButton';
import CartPopup from './components/Cart/CartPopup';
import ProductGrid from './components/Product/ProductGrid';


function App() {
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) setCart(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existed = prev.find(i => i.id === product.id)
      if (existed) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  return (
    <main>
      <CartButton count={cart.length} onClick={() => setOpen(!open)} />
        {open && <CartPopup items={cart} />}
      <ProductGrid onAdd={handleAddToCart} />
    </main>
  )
}
export default App
