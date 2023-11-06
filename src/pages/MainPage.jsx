import BestProducts from "../sections/BestProducts"

import SendShopPage from "../sections/SendShopPage"
import TrendingProducts from "../sections/TrendingProducts"
import Hero from "../sections/Hero"

const MainPage = () => {
  return (  
    <section>
        <Hero />
      <BestProducts />
      <SendShopPage />
      <TrendingProducts />
    </section>
  )
}

export default MainPage