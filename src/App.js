
import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <div className="font-poppins ">
<Navbar />
<Home />
<Skills />
<Portfolio />
<Contact />
<Footer />
    </div>
  );
}

export default App;
