import './App.css'
import Header from './Component/Header/Header';
import HeroSection from './Component/HeroSection/HeroSection';

function App() {

  return (
   <div className='container'>
    <Header/>
    <main>
      <HeroSection/>
    </main>
   </div>
  )
}

export default App;
