import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import settingsGear from '../img/SettingsGear.png';
import arrowIcon from '../img/arrow.svg';
import connectWalletIcon from '../img/connect-wallet-icon.png';

const SwapWindowTabs = () => {
    const liquidityClicked = () => {
        console.log('click')
    }
    return (
        <Tabs>
            <TabList>
                <Tab><div className="Exchange">Exchange</div></Tab>
                <Tab><div className="Liquidity">Liquidity</div></Tab>
            </TabList>
        
            <TabPanel>
                <div className="Rectangle-8">
                    <img src={settingsGear} className="settings-gear" alt="settings"/>
                    <span className="SwapCoinsText">Swap Coins</span>
                    <div className="from-text">From</div>
                    <div className="from-box">
                        <input type="text" autocomplete="off" className="from-input" id="fname" name="fname" placeholder="Enter amount"></input>
                    </div>
                    <div className="swap-around-button">
                        <img src={arrowIcon} className="arrow-icon" alt="swap"/>
                    </div>
                    <div className="to-text">To</div>
                    <div className="to-box">
                        <input type="text" autocomplete="off" className="to-input" id="fname" name="fname" placeholder="Enter amount"></input>
                        <span className="dollar-amount">$</span>
                    </div>

                    <div className="Rectangle-12">
                        <div className="ConnectWalletText">CONNECT WALLET</div>
                        <img src={connectWalletIcon} className="connect-wallet-icon" alt="settings"/>
                    </div>   
                </div>
            </TabPanel>
            <TabPanel>
                <div className="Rectangle-8"></div>
            </TabPanel>
        </Tabs>
    )
}

export default SwapWindowTabs;