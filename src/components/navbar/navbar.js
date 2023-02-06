import React, { useState } from "react";
import logo from "../../image/home-icon.svg";
import "./navbar.css";
const Navbar = () => {
  const [toogle,setToggle] = useState(false)

  const isClose=()=>{
    setToggle(!true)
    console.log(toogle)
  }
  const isOpen=()=>{
    setToggle(!false)
    console.log(toogle)
  }
  return (
    <div className="container-nav">
      <nav className={`${toogle ? 'none':'block'}`}>
        <div className={`navbar-logo`}>
          <img src={logo} width="100" height={"100"} alt="..." />
          {/* icons */}
          <i class="fa-sharp fa-solid fa-bars hidden" onClick={isClose} ></i>
          <i class={`fa-sharp fa-solid fa-times ${toogle ? 'none-dis' : 'block'}`} onClick={isOpen} ></i>
        </div>
        <div className={`navbar-menu ${toogle ? 'none-dis':null}`}>
          <div>Menu</div>
          <div>About Us</div>
          <div>Projects</div>
          <button className="btn btn-nav">Sing in</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
