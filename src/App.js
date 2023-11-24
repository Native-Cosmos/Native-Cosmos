import './App.css';
import Footer from './components/Footer';
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
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
