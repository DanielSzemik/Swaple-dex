import logo from './logo.svg';
import './App.css';
import './css/clash-display.css';
import Header from './components/Header'
//import SwapWindow from './components/SwapWindow'
import SwapWindowTabs from './components/SwapWindowTabs'
import background from './img/coin-3-d.png';

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom calc(50% - 185px) left calc(50% - 200px)'
    }}>
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
