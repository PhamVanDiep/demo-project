import React from "react";
import "../../style/Root.css"
import "../../style/Header.css"
import Search from "../../res/header-image/search.png";
import LoginStatus from "./LoginStatus";

function Header() {
  return (
    <div className="header col-12">
      <div className="main-header col-10">
          <div className="logo col-2"><p>THDD</p></div>
          <div className="search-wrap col-7">
            <div className="input-wrap col-5">
              <input type="text" placeholder="Nhập tên sản phẩm muốn tìm kiếm" ></input>
            </div>
            <div className="button-wrap col-2">
              <button className="search-btn">
                <img src={Search} alt="search" />
                Tìm kiếm</button>
            </div>
          </div>
          <LoginStatus />
      </div>
    </div>
  );
}
export default Header;