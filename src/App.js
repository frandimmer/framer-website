import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ProductsV2 from './Components/ProductsV2';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
      </Helmet>
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
