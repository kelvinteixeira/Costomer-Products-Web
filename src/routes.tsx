import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Dashboard } from './screens/Dashboard'
import { Home } from './screens/Home'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}