
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
    <div className="">
<Navbar />
<Home />
<Skills />
<Portfolio />
<Testimonial />
<Contact />
<Footer />
    </div>
  );
}

export default App;
