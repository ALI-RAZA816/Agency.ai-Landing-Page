import './App.css'
import Companies from './Component/Companies/Companies';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import HeroSection from './Component/HeroSection/HeroSection';
import LatestWork from './Component/Latestwork/LatestWork';
import Team from './Component/Team/Team';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroSection />
        <Companies />
        <LatestWork/>
        <Team/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App;
