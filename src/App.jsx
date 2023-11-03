import Nav from "./components/Nav"
import BestProducts from "./sections/BestProducts"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import SendShopPage from "./sections/SendShopPage"
import TrendingProducts from "./sections/TrendingProducts"
import './style/style.css'


function App() {

  return (
    <main>
      <Nav />
      <Hero />
      <BestProducts />
      <SendShopPage />
      <TrendingProducts />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
