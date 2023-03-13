import Listings from './components/Listings';
import Background from './components/Background';
import NavBar from './components/Navbar';

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Background />
      <Listings />
    </div>
  );
}

export default App;
