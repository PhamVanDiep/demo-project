import React from "react";
import "../../style/Root.css"
import "../../style/Header.css"
import PersonLogo from "../../res/header-image/person.png"
import CartLogo from "../../res/header-image/cart.png"

function LoginStatus() {
    return(
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
    );
}

export default LoginStatus;