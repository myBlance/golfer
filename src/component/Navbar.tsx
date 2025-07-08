import React, { useState } from "react";
import "../styles/Navbar.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RiSearchLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { LiaPhoneSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            {/* Top Bar */}
            <div className="topBar">
                <div className="topLeft">
                    <span>
                        <AccessTimeIcon style={{fontSize: '22px', marginRight: '4px', color:'#7ba979' }} />
                        Mon–Fri 8:00 am–6:00 pm
                    </span>
                    <span>
                        <MailOutlineIcon style={{fontSize: '22px', marginRight: '4px', color:'#7ba979' }} />
                        info@example.com
                    </span>
                    <span>
                        <PlaceOutlinedIcon style={{fontSize: '22px', marginRight: '4px', color:'#7ba979' }} />
                        8302 Preston Rd. Maine 9380
                    </span>
                </div>
                <div className="topRight">
                    <Link to="/search" className="searchLink">
                        <RiSearchLine />
                    </Link>
                    <Link to="/login" className="loginLink">
                        <span>Login</span>
                    </Link>
                    <Link to="/facebook" className="socialLink">
                        <FaFacebookF />
                    </Link>
                    <Link to="/twister" className="socialLink">
                        <FaTwitter />
                    </Link>
                    <Link to="/linkin" className="socialLink">
                        <TiSocialLinkedin />
                    </Link>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="mainNavbar">
                <div className="navlogo">
                    <img src="/assets/images/logo-2.png" alt="Golfer Logo" />
                </div>
                <ul className={`navLinks ${isMenuOpen ? "show" : ""}`}>
                    {isMenuOpen && (
                        <li className="closeBtn" onClick={() => setIsMenuOpen(false)}>
                        <span>&times;</span>
                        </li>
                    )}
                    <li><a href="#">HOME <ExpandMoreIcon/></a></li>
                    <li><a href="#">PAGES <ExpandMoreIcon/></a></li>
                    <li><a href="#">COURSES <ExpandMoreIcon/></a></li>
                    <li><a href="#">SHOP <ExpandMoreIcon/></a></li>
                    <li><a href="#">BLOG <ExpandMoreIcon/></a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <div className="navmenu" onClick={toggleMenu}>
                    <MenuIcon/>
                </div>
                <div className="navRight">
                    <span className="phone">
                        <LiaPhoneSolid  style={{fontSize: '22px', marginRight: '4px', color:'#7ba979' }}/>
                        (239)-543–217–0108
                    </span>
                    <button className="visitBtn">
                        <span>BOOK A VISIT</span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
