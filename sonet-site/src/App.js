import Navbar from './Navbar';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;