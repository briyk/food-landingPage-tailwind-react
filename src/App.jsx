
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import FoodMenu from './components/FoodMenu'
import Category from './components/Category'

function App() {

  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Features/>
        <FoodMenu/>
        <Category/>
    </div>
  )
}

export default App
