import '../styles/Footer.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-curve"></div>
      <div className="footer-top">
        <div className="footer-subscribe">
          <div className="footer-logo">
            <img src="/assets/images/logo-3.png" alt="GolFer" />
          </div>
          <div className="footer-subscribe-form">
            <span className="subscribe-title">Subscribe Now</span>
            <div className="subscribe-input">
              <input type="email" placeholder="Your email" />
              <button> <span>SUBSCRIBE NOW</span></button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur diam ultricies leo etiam nibh tristique.
          </p>
          <p>
            Odio feugiat vitae libero vestibu viverra elementum luctus.
          </p>
        </div>
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li>About Us</li>
            <li>Courses</li>
            <li>Historic Timeline</li>
            <li>Career</li>
            <li>Membership</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Working Hours</h4>
          <p>Tincidunt neque pretium lectus donec risus.</p>
          <p>Mon – Fri: 9:00AM – 6:00PM</p>
          <p>Sat – Sun: 8:00AM – 4:00PM</p>
        </div>
        <div className="footer-column">
          <h4>Get In Touch</h4>
          <p>
            <LocationOnOutlinedIcon sx={{marginRight:'5px'}}/>
            Add: New Hyde Park, NY 11040</p>
          <p>
            <EmailOutlinedIcon sx={{marginRight:'5px'}}/>
             Email: example@info.com</p>
          <p>
            <LocalPhoneOutlinedIcon sx={{marginRight:'5px'}}/>
             Phone: 333 666 0000</p>
          <div className="footer-socials">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
            <span><FaLinkedinIn/></span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2024 by GolFer All Right Reserved.</p>
      </div>
    </footer>
  );
}
