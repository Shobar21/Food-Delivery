import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './Components/ContextReducer'
function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
