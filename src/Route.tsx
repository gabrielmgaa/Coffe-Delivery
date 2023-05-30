import { Route, Routes } from 'react-router-dom'

import { Layout } from './pages/layouts/Layout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { FinalOrder } from './pages/FinalOrder'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/finalorder" element={<FinalOrder />} />
      </Route>
    </Routes>
  )
}