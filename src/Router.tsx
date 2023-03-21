/* eslint-disable react/jsx-no-undef */
import { Routes, Route } from 'react-router-dom'
import { DefautLayout } from './layouts/DefaultLayout/index'
import { History } from './pages/History'

import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefautLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
