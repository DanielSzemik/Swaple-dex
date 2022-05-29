import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import settingsGear from '../img/SettingsGear.png';
import arrowIcon from '../img/arrow.svg';
import connectWalletIcon from '../img/connect-wallet-icon.png';
import swapIcon from '../img/swap-icon.png';
import swapleTokenLogo from '../img/coinLogos/SWPL.png';
import React from "react"

import SWPL from '../img/coinLogos/SWPL.png';
import BNB from '../img/coinLogos/BNB.png';
import CAKE from '../img/coinLogos/CAKE.png';
import LUNA from '../img/coinLogos/LUNA.png';
import MATIC from '../img/coinLogos/MATIC.png';



const SwapWindowTabs = (props) => {
    const swapTopAndBottom = () => {
        var a = fromTokenTicker;
        var b = fromTokenLogo;
        setFromTokenLogo(toTokenLogo);
        setFromTokenTicker(toTokenTicker);
        setToTokenLogo(b);
        setToTokenTicker(a);
        
    }
    const [showFromTokenDropdown, setShowFromTokenDropdown] = React.useState(false)
    const [showOverlay, setShowOverlay] = React.useState(false)
    const fromDropdownClicked = () => {
        setShowFromTokenDropdown(true)
        document.getElementById('Root').style.filter = 'blur(0px)'
    }
    const [fromTokenTicker, setFromTokenTicker] = React.useState("SWPL")
    const [fromTokenLogo, setFromTokenLogo] = React.useState(SWPL)
    function changeFromToken(ticker,image){
        if (toTokenTicker == ticker){
            setToTokenTicker(fromTokenTicker)
            setToTokenLogo(fromTokenLogo)
        }
        setFromTokenTicker(ticker)
        setFromTokenLogo(image)
        setShowFromTokenDropdown(false)
    }
    const FromTokenDropdownDiv = () => {
        return (
            <div className="from-token-list">
                <div className="token-list-margin"></div>
                <div onClick={() => changeFromToken('SWPL',SWPL)} className="token-dropdown-item">
                    <img src={SWPL} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">SWPL</span>
                </div>
                <div onClick={() => changeFromToken('BNB',BNB)} className="token-dropdown-item">
                    <img src={BNB} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">BNB</span>
                </div>
                <div onClick={() => changeFromToken('CAKE',CAKE)} className="token-dropdown-item">
                    <img src={CAKE} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">CAKE</span>
                </div>
                <div onClick={() => changeFromToken('LUNA',LUNA)} className="token-dropdown-item">
                    <img src={LUNA} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">LUNA</span>
                </div>
                <div onClick={() => changeFromToken('MATIC',MATIC)} className="token-dropdown-item">
                    <img src={MATIC} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">MATIC</span>
                </div>
                <div className="token-list-margin"></div>
            </div>
        )
    }

    const [showToTokenDropdown, setShowToTokenDropdown] = React.useState(false)
    const toDropdownClicked = () => {
        setShowToTokenDropdown(true)
    }
    const [toTokenTicker, setToTokenTicker] = React.useState("CAKE")
    const [toTokenLogo, setToTokenLogo] = React.useState(CAKE)
    function changeToToken(ticker,image){
        if (fromTokenTicker == ticker){
            setFromTokenTicker(toTokenTicker)
            setFromTokenLogo(toTokenLogo)
        }
        setToTokenTicker(ticker)
        setToTokenLogo(image)
        setShowToTokenDropdown(false)
    }
    const ToTokenDropdownDiv = () => {
        return (
            <div className="from-token-list">
                <div className="token-list-margin"></div>
                <div onClick={() => changeToToken('SWPL',SWPL)} className="token-dropdown-item">
                    <img src={SWPL} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">SWPL</span>
                </div>
                <div onClick={() => changeToToken('BNB',BNB)} className="token-dropdown-item">
                    <img src={BNB} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">BNB</span>
                </div>
                <div onClick={() => changeToToken('CAKE',CAKE)} className="token-dropdown-item">
                    <img src={CAKE} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">CAKE</span>
                </div>
                <div onClick={() => changeToToken('LUNA',LUNA)} className="token-dropdown-item">
                    <img src={LUNA} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">LUNA</span>
                </div>
                <div onClick={() => changeToToken('MATIC',MATIC)} className="token-dropdown-item">
                    <img src={MATIC} className="token-dropdown-item-logo" alt="swaple-token"/>
                    <span className="token-dropdown-item-ticker">MATIC</span>
                </div>
                <div className="token-list-margin"></div>
            </div>
        )
    }

    const connectWalletClicked = () => {
        props.showOverlay(true)
    }
    const WalletUnconnectedDiv = () => {
        return (
        <div onClick={connectWalletClicked} className="connect-wallet">
            <div className="ConnectWalletText">CONNECT WALLET</div>
            <img src={connectWalletIcon} className="connect-wallet-icon" alt="connect-wallet"/>
        </div>   
        )
    }

    const WalletConnectedDiv = () => {
        return (
        <div className="connect-wallet">
            <div className="swap-text">SWAP</div>
            <img src={swapIcon} className="swap-icon" alt="swap"/>
        </div>   
        )
    }

    
    const ConnectWalletOverlay = () => {
        return (
        <div className="overlay-background">
            <div className="connect-wallet-overlay">
            
            </div>   
        </div>   
        )
    }


    return (
            
            <Tabs>
                <TabList>
                    <Tab><div className="Exchange">Exchange</div></Tab>
                    <Tab><div className="Liquidity">Liquidity</div></Tab>
                </TabList>
            
                <TabPanel>
                    <div className="Rectangle-8">
                        <div className="settings-gear">
                            <img src={settingsGear} alt="settings"/>
                        </div>
                        
                        <span className="SwapCoinsText">Swap Coins</span>
                        <div className="from-text">From</div>
                        <div className="from-box">
                            <input type="text" autocomplete="off" className="from-input" id="fname" name="fname" placeholder="Enter amount"></input>
                            <div onClick={fromDropdownClicked} className="from-token">
                                <img src={fromTokenLogo} className="swaple-token-logo" alt="swaple-token"/>
                                <span className="from-token-ticker">{fromTokenTicker}</span>
                                <svg height="8" width="15" className ="from-polygon">
                                    <polygon points="0,0 15,0 7.5,8 " fill="#757590" stroke="purple"/>
                                </svg>
                            </div>
                            {showFromTokenDropdown ? <FromTokenDropdownDiv /> : null}
                        </div>
                        <div onClick={swapTopAndBottom} className="swap-around-button">
                            <img src={arrowIcon} className="arrow-icon" alt="swap"/>
                        </div>
                        <div className="to-text">To</div>
                        <div className="to-box">
                            <input type="text" autocomplete="off" className="to-input" id="fname" name="fname" placeholder="Enter amount"></input>
                            <span className="dollar-amount">$</span>
                            <div onClick={toDropdownClicked} className="from-token">
                                <img src={toTokenLogo} className="swaple-token-logo" alt="swaple-token"/>
                                <span className="from-token-ticker">{toTokenTicker}</span>
                                <svg height="8" width="15" className ="from-polygon">
                                    <polygon points="0,0 15,0 7.5,8 " fill="#757590" stroke="purple"/>
                                </svg>
                            </div>
                            {showToTokenDropdown ? <ToTokenDropdownDiv /> : null}
                        </div>
                        {props.connected ?<WalletConnectedDiv /> : <WalletUnconnectedDiv />}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="Rectangle-8"></div>
                </TabPanel>
            </Tabs>
    )
}

export default SwapWindowTabs;