import './App.css';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import My3Dcomponent from './components/My3Dcomponent';
import Navbar from './components/Navbar';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
