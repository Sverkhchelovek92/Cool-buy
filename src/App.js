import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
