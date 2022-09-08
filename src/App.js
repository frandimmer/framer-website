import './App.css';
import styled from 'styled-components';
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
      <ProductsV2 />
      {/* <About /> */}
      {/* <Products /> */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
