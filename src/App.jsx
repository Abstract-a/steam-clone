import Navbar from './components/Navbar';
import Browse from './components/Browse';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Recommended from './components/Recommended';
import SpecialOffers from './components/SpecialOffers';
import './index.css';

function App() {
  return (
    <div className="h-screen bg-[#1b2838]">
      <Navbar />
      {/* <Categories />
      <Recommended />
      <SpecialOffers />
      <Browse />
      <Footer /> */}
    </div>
  );
}

export default App;
