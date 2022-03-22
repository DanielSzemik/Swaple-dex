import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
//import SwapWindow from './components/SwapWindow'
import SwapWindowTabs from './components/SwapWindowTabs'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      
      <div className="Tab-swap-window" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <SwapWindowTabs />
      </div>
      
    </div>
  );
}

export default App;
