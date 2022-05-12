import React from "react";
import "../../style/Root.css"
import "../../style/Header.css"
import Search from "../../res/header-image/search.png";
import PersonLogo from "../../res/header-image/person.png";
import CartLogo from "../../res/header-image/cart.png";


function Header() {
  return (
    <div className="header col-12">
      <div className="main-header col-10">
          <div className="logo col-2">
            <div id="logo-wrap"><p>THDD</p></div>
            <div className="mobile-login-cart">
              <div className="cart">
                  <img src={CartLogo} alt="" ></img>
                  <span className="circle">5</span>
              </div>
              <div className="login">
                  <img src={PersonLogo} alt=""></img>
              </div>
            </div>
          </div>
          <div className="search-wrap col-7">
            <div className="input-wrap col-5">
              <input type="text" placeholder="Nhập tên sản phẩm muốn tìm kiếm" ></input>
            </div>
            <div className="button-wrap col-2">
              <button className="search-btn">
                <img src={Search} alt="search" id="search-btn"/>
                Tìm kiếm</button>
            </div>
          </div>
          <div className="login-cart col-3">
            <div className="login">
                <img src={PersonLogo} alt=""></img>
                <span>Đăng ký</span>
                <span>/</span>
                <span>Đăng nhập</span>
            </div>
            <div className="cart">
                <img src={CartLogo} alt="" ></img>
                <span className="circle">5</span>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Header;