import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.style.scss";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <p id="logo">MNTN</p>
      <nav ref={navRef}>
        <a href="/#">Equipment</a>
        <a href="/#">About us</a>
        <a href="/#">Blog</a>
        <a href="/#" id="account">
          Account
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
