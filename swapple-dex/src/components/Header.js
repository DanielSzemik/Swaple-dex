import logo from '../img/Group13.svg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img src={logo} className="Swapple-logo" alt="logo"/>
        </header>
    )
}

export default Header;