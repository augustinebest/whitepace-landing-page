import './nav.css';
import logo from '../../assets/whitepace-logo.png';
import arrowDown from '../../assets/arrow-down.svg';

function Nav() {
    return (
        <header>
            <nav>
                <div class="nav-container">
                    <div>
                        <span class="logo-name"><img src={logo} id="whitepace-logo"
                            alt="whitepace-logo" /></span>
                    </div>

                    <div class="second-section">
                        <div class="nav-links">
                            <ul>
                                <li class="nav-links-li">Products <img src={arrowDown} alt="arrow-down" />
                                </li>
                                <li class="nav-links-li">Solutions <img src={arrowDown} alt="arrow-down" />
                                </li>
                                <li class="nav-links-li">Resources <img src={arrowDown} alt="arrow-down" />
                                </li>
                                <li class="nav-links-li">Pricing <img src={arrowDown} alt="arrow-down" /></li>
                            </ul>

                        </div>
                    </div>
                    <div>
                        <ul>
                            <li id="login-btn-id"><button id="login-btn">Login</button></li>
                            <li><button id="try-free-btn">Try Whitepace free</button></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Nav;