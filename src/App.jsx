import './App.css'
import Companies from './Component/Companies/Companies';
import Contact from './Component/Contact/Contact';
import { ContextValues } from './Component/Context/Context';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import HeroSection from './Component/HeroSection/HeroSection';
import LatestWork from './Component/Latestwork/LatestWork';
import Team from './Component/Team/Team';

function App() {


  return (
    <>
      <ContextValues.Provider>
        <header>
          <Header />
        </header>
        <main>
          <HeroSection />
          <Companies />
          <LatestWork />
          <Team />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </ContextValues.Provider>
    </>
  )
}

export default App;
