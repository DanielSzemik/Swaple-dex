import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SwapWindow from './components/SwapWindow'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      
      <div className="Swap-window" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <SwapWindow />
      </div>
      
    </div>
  );
}

export default App;
