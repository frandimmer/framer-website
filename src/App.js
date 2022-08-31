import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import About from './Components/About';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
      <Navbar />
      </div>
      <div className='hero'>
      <Hero />
      </div>
      <div className='about'>
        <About />
      </div>
      <div className='products'>
        <Products />
      </div>
    </div>
  );
}

export default App;
