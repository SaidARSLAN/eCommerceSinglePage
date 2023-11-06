import Nav from "./components/Nav"
import SideBar from "./components/SideBar"
import Categories from "./pages/Categories"
import MainPage from "./pages/MainPage"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import './style/style.css'
import {Route,Routes} from 'react-router-dom'
function App() {

  return (
    <main>
      <SideBar />
      <Nav />
      
     
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path="/categories" element={<Categories />}></Route>
    </Routes>
    <Contact />
      <Footer />
    </main>
  )
}

export default App
