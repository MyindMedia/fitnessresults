import { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Success from './pages/Success'

function App() {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
        // Each new page starts at its heading rather than retaining the previous page's scroll.
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [pathname])

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
                        <Route path="/success" element={<Success />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </CartProvider>
    )
}

export default App
