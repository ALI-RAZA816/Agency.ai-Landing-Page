import './App.css'
import Companies from './Component/Companies/Companies';
import Header from './Component/Header/Header';
import HeroSection from './Component/HeroSection/HeroSection';
import LatestWork from './Component/Latestwork/LatestWork';

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
      </main>
    </>
  )
}

export default App;
