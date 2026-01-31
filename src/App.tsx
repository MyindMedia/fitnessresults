import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Home from './pages/Home'
import Memberships from './pages/Memberships'
import ScheduleVisit from './pages/ScheduleVisit'
import Contact from './pages/Contact'
import Store from './pages/Store'
import Product from './pages/Product'

function App() {
    return (
        <CartProvider>
            <div className="app">
                <Header />
                <Cart />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/memberships" element={<Memberships />} />
                        <Route path="/schedule-visit" element={<ScheduleVisit />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/store/:productId" element={<Product />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </CartProvider>
    )
}

export default App
