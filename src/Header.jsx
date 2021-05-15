import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import Login_Icon from './img/login-icon.svg';
import Bag from './img/shopping-bag-icon.svg';
import Heart from './img/heart-icon.svg';
import TN_last_icon from './img/ernaehrungsberatung-icon-header-submenue.svg';
import Logo from './img/logo.png';
import Shopping_bag from './img/shopping-bag-icon.svg'
import {
    FaRegEnvelope,
    FaWhatsapp,
    FaFacebookSquare,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa'



const Header = () => {

    const [toggle, setToggle] = useState(false)

    const toogleBar = (e) => {
        e.preventDefault();
        setToggle(!toggle)
    }

    let closeClass = [' '];
    let toggleNav = [' '];

    if (toggle) {
        closeClass.push('change');
        toggleNav.push('show')
    }


    return (
        <div className="header">
            {/* top nav */}
            <div className="top__nav sm-d-800-none">
                <div className="container">
                    <div className="row align__items__center">
                        {/* left */}
                        <div className="tn__pull__left">
                            <a href="tel:+431234567890">
                                <AiOutlinePhone />
                                <span className="sm-d-991-none">+43 1 234 567 890</span>
                            </a>
                            <a href="mailto:">
                                <FaRegEnvelope />
                            </a>
                            <Link to="">
                                <FaWhatsapp />
                            </Link>
                            <Link to="">
                                <FaFacebookSquare />
                            </Link>
                            <Link to="">
                                <FaInstagram />
                            </Link>
                            <Link to="">
                                <FaYoutube />
                            </Link>
                        </div>

                        {/* right */}
                        <div className="tn__pull__right ml__auto">
                            <ul>
                                <li>
                                    <NavLink className="tn__nav__link" to="/login" activeClassName="nav__active">
                                        <img src={Login_Icon} alt="" className="text-icons" />
                                         Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="tn__nav__link" to="/login" activeClassName="nav__active">
                                        <img src={Bag} alt="" className="text-icons" />
                                         Warenkorb
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="tn__nav__link" to="/login" activeClassName="nav__active">
                                        <img src={Heart} alt="" className="text-icons" />
                                         Wunschliste
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="tn__nav__link" to="/login" activeClassName="nav__active">
                                        DE | <span className="unbold">EN</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="tn__nav__link" to="/login" activeClassName="nav__active" style={{ color: '#46b1e7' }}>
                                        <img src={TN_last_icon} alt="" className="text-icons" />
                                        Ernährungsberatung
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* main nav */}
            <div className="main__nav">
                <div className="container">
                    <div className="row main__nav__wrapper align__items__center position__relative">

                        {/* toogle btn */}
                        <button className="toggle__bar d__none sm-d-800-block" onClick={toogleBar}>
                            <span className={`bar-1${closeClass.join(' ')}`}></span>
                            <span className={`bar-2${closeClass.join(' ')}`}></span>
                            <span className={`bar-3${closeClass.join(' ')}`}></span>
                        </button>

                        {/* main nav */}
                        <nav className="d__flex flex__end w__100">
                            {/* logo */}
                            <Link to="/">
                                <img src={Logo} alt="" className="brand__logo" />
                            </Link>

                            <div className={`navigation ml__auto ${toggleNav.join(' ')}`}>
                                <ul className="d__flex">
                                    <li>
                                        <NavLink activeClassName="nav__active" to="hund">Hund</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="nav__active" to="katze">Katze</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="nav__active" to="zubehor">Zubehör</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="nav__active" to="barf">BARF</NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName="nav__active" to="bio">BIO</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* mobile-v bag */}
                        <div className="shopping__bag d__none sm-d-800-block">
                            <Link to="/">
                                <img src={Shopping_bag} alt="" />
                                <span className="product__counter">5</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
