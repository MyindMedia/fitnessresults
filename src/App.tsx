import { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Home from './pages/Home'
import Memberships from './pages/Memberships'
import Coaches from './pages/Coaches'
import GroupClasses from './pages/GroupClasses'
import ScheduleVisit from './pages/ScheduleVisit'
import Contact from './pages/Contact'
import Store from './pages/Store'
import Product from './pages/Product'
import Success from './pages/Success'

function App() {
    const { pathname, hash } = useLocation()

    useLayoutEffect(() => {
        // Named sections land at their content; all other pages start at the heading.
        if (hash) {
            const frame = requestAnimationFrame(() => {
                const target = document.getElementById(decodeURIComponent(hash.slice(1)))
                if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' })
                else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
            })
            return () => cancelAnimationFrame(frame)
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [pathname, hash])

    return (
        <CartProvider>
            <div className="app">
                <Header />
                <Cart />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/memberships" element={<Memberships />} />
                        <Route path="/coaches" element={<Coaches />} />
                        <Route path="/group-classes" element={<GroupClasses />} />
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
