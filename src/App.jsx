import './App.css'
import Companies from './Component/Companies/Companies';
import Header from './Component/Header/Header';
import HeroSection from './Component/HeroSection/HeroSection';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroSection />
        <Companies />
      </main>
    </>
  )
}

export default App;
