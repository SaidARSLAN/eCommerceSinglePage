import Nav from "./components/Nav"
import BestProducts from "./sections/BestProducts"
import Hero from "./sections/Hero"
import SendShopPage from "./sections/SendShopPage"
import './style/style.css'


function App() {

  return (
    <main>
      <Nav />
      <Hero />
      <BestProducts />
      <SendShopPage />
    </main>
  )
}

export default App
