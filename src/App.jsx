import Navbar from './components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Newsletter from './components/Newsletter/Newsletter'
import Categories from './components/Categories/Categories'
import Instagram from './components/Instagram/Instagram'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Categories/>
      <Instagram/>
      <Newsletter/>
      <Footer/>
    </div>
    )
}

export default App
