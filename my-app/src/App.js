import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './Components/ContextReducer'
import Myorder from './Components/Myorder'
function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/myOrder' element={<Myorder />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
