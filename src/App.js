import './App.css';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { TeamMembers } from './components/TeamMembers';
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
      <TeamMembers />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
