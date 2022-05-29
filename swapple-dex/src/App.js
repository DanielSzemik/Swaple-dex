import logo from './logo.svg';
import './App.css';
import './css/clash-display.css';
import Header from './components/Header'
//import SwapWindow from './components/SwapWindow'
import SwapWindowTabs from './components/SwapWindowTabs'
import background from './img/coin-3-d.png';
import ConnectWalletBox from './components/ConnectWalletBox';
import React from "react";
import metamaskOverlayIcon from './img/metamask-overlay-icon.png';
import phantomOverlayIcon from './img/phantom-overlay-icon.png';
import { ethers } from "ethers";

function App() {

  const [walletConnected, setWalletConnected] = React.useState(false)
  const [showOverlay, setShowOverlay] = React.useState(false)
  const [userWalletAddress, setUserWalletAddress] = React.useState("")
  

  function overlayBackgroundClicked(event){
    //setShowOverlay(false)
    //event.stopPropagation()
  }

  async function connectMetamask(){
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    var address = await signer.getAddress()
    console.log("Account:", await signer.getAddress()); 
    setUserWalletAddress("0x...".concat(address.slice(address.length - 4)));
    setWalletConnected(true);
    setShowOverlay(false);
}
    

  const ConnectWalletOverlay = () => {
        return (
        <div onClick={overlayBackgroundClicked} className="overlay-background">
            <div className="connect-wallet-overlay">
              <span className="overlay-connect-wallet-text">Connect wallet</span>
              <span className="overlay-choose-wallet-text">Choose which wallet you want to trade with</span>
              <div onClick={connectMetamask} className="overlay-metamask-box">
                <img src={metamaskOverlayIcon} className="metamask-overlay-icon" alt="swaple-token"/>
                <span className="metamask-overlay-text">Metamask</span>
              </div>
              <div className="overlay-phantom-box">
                <img src={phantomOverlayIcon} className="phantom-overlay-icon" alt="swaple-token"/>
                <span className="phantom-overlay-text">Phantom</span>
              </div>
            </div>
        </div>       
         )
  }



  return (
    <div id="Root">
      {showOverlay ?<ConnectWalletOverlay /> : null }

      <div className="App" style={{ 
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom calc(50% - 185px) left calc(50% - 200px)'
      }}>
        <div className="Header">
          <Header />
        </div>
        <div>
          <ConnectWalletBox setConnected={setWalletConnected} connected={walletConnected} walletAddress={userWalletAddress}/>
        </div>
        
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <SwapWindowTabs connected={walletConnected} showOverlay={setShowOverlay}/>
          
        </div>
        
      </div>
    </div>
    
  );
  
}

export default App;
