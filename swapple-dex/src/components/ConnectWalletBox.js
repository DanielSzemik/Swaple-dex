import metamaskWalletIcon from '../img/metamask-wallet-icon.png';
import phantomWalletIcon from '../img/phantom-wallet-icon.png';
import { injected } from "../components/wallet/Connectors"
import { useWeb3React } from "@web3-react/core"
import './ConnectWalletBox.css';
import { ethers } from "ethers";
import React, {useEffect} from "react"




const ConnectWalletBox = (props) => {
    const [walletConnected, setWalletConnected] = React.useState(props.connected);
    const [userWalletAddress, setUserWalletAddress] = React.useState(props.walletAddress)
    console.log(props.connected)

    useEffect(() => {
        setWalletConnected(props.connected);
    }, [props.connected]);

    useEffect(() => {
        setUserWalletAddress(props.walletAddress);
    }, [props.walletAddress]);

    async function connect(){
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        var address = await signer.getAddress()
        console.log("Account:", await signer.getAddress());
        setWalletConnected(true);
        setUserWalletAddress("0x...".concat(address.slice(address.length - 4)));
        props.setConnected(true)
    }

    const WalletUnconnectedDiv = () => {
        return (
            <div className="root-unconnected">
                <span className="connect-wallet-text">Connect Wallet</span>
                <div onClick={connect}>
                    <img src={metamaskWalletIcon} className="metamask-wallet-icon" alt="metamask-wallet-icon"/>
                </div>
                <img src={phantomWalletIcon} className="phantom-wallet-icon" alt="phantom-wallet-icon"/>
            </div>
        )
    }

    const WalletConnectedDiv = () => {
        return (
            <div className="root-connected">
                <span className="connect-wallet-text">Connected</span>
                <span className="wallet-address">{userWalletAddress}</span>
                <svg height="8" width="15" className ="connected-polygon">
                    <polygon points="0,0 15,0 7.5,8 " fill="#757590" stroke="purple"/>
                </svg>
            </div>
        )
    }
    
    return (
        <div className="root">

            {walletConnected ?<WalletConnectedDiv /> : <WalletUnconnectedDiv />}
        </div>
    )
}

export default ConnectWalletBox;