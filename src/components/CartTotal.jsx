import React from 'react'
import { formatCLP } from '../utils/format.js'

export default function CartTotal({ items }) {
  const total = items.reduce((acc, it) => acc + (it.offerPrice ?? it.price), 0)
  return <strong>{formatCLP(total)}</strong>
}
