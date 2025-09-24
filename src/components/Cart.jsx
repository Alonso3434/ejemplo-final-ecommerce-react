import React from 'react'
import CartTotal from './CartTotal.jsx'
import { formatCLP } from '../utils/format.js'

export default function Cart({ items, onRemove }) {
  return (
    <section style={{ marginTop: '2rem' }}>
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p style={{ color: '#555' }}>Tu carrito está vacío. Agrega productos desde el listado.</p>
      ) : (
        <div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
            {items.map((it) => (
              <li key={it.uid} style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid #eee', borderRadius: 12, padding: 8 }}>
                <img src={it.image} alt={it.name} style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 8 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{it.name}</div>
                  <div style={{ fontSize: 13, color: '#555' }}>{formatCLP(it.offerPrice ?? it.price)}</div>
                </div>
                <button onClick={() => onRemove(it.uid)} style={{ padding: '0.4rem 0.6rem', borderRadius: 8, border: '1px solid #c00', background: 'white', color: '#c00', cursor: 'pointer' }}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 12 }}>
            <span>Total:</span> <CartTotal items={items} />
          </div>
        </div>
      )}
    </section>
  )
}
