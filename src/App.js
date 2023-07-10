import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Banner from './Components/Banner/Banner';
import {Rowpost} from './Components/Rowpost/Rowpost';
import { action, drama, originals, trending } from './urls';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={trending} title='Trending Movies' />
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action Movies' small/>
      <Rowpost url={drama} title='Drama' small/>
      <Footer/>
    </div>
  );
}

export default App;
