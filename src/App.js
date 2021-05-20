import Image from './api/Images';
import './App.css';
import Home from './Pages/Home';
import Options from './Pages/Options';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Options/>
      </header>
    </div>
  );
}

export default App;
