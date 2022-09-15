import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import About from './Components/About';
import Products from './Components/Products';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ProductsV2 from './Components/ProductsV2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <ProductsV2 />
      {/* <Products /> */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
