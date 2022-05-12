import React from "react";
import "../../style/Root.css";
import "../../style/Footer.css";
import Location from "../../res/footer-image/location.png";
import Viber from "../../res/footer-image/viber.png";
import Mail from "../../res/footer-image/mail.png";
import Certification from "../../res/footer-image/certificaion.png"
import Payment from "../../res/footer-image/payment.png";
import Ship from "../../res/footer-image/ship.png";
import SocialNetwork from "../../res/footer-image/mxh.png";
import QR from "../../res/footer-image/qr.png";
function Footer() {
  return (
    <div className="footer col-12">
      <div className="main-footer col-10">
        <div className="store-info">
          <h2>Công ty TNHH THDD</h2>
          <div className="info">
            <img src= {Location} alt="location"/>
            <span><b>Địa chỉ:</b> Tầng 4-5-6, Tòa nhà Capital Place, 
              số 29 đường Liễu Giai, Phường Ngọc Khánh, 
              Quận Ba Đình, Thành phố Hà Nội, Việt Nam.</span>
          </div>
          <div className="info">
            <img src= {Viber} alt="hotline"/>
            <span><b>Tổng đài hỗ trợ: </b>19002222</span>
          </div>
          <div className="info">
            <img src= {Mail} alt="mail"/>
            <span><b>Email: </b>cskh@hotro.thdd.vn</span>
          </div>
          <h2>Chứng nhận bởi</h2>
          <img src={Certification} alt="certification" />
          <p>Giấy chứng nhận Đăng ký Kinh doanh số 0123456789 
            do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần 
            đầu ngày 06/01/2010 và sửa đổi lần thứ 22 ngày 14/02/2022</p>
          <p>© 2022 - Bản quyền của Công ty TNHH THDD</p>
        </div>
        <div className="payment-ship">
          <h2>Phương thức thanh toán</h2>
          <img src={Payment} alt="payment"/>
          <h2>Đơn vị vận chuyển</h2>
          <img src={Ship} alt="ship"/>
        </div>
        <div className="connect-download">
          <h2>Kết nối với chúng tôi</h2>
          <img src={SocialNetwork} alt="social network"/>
          <h2>Tải ứng dụng trên điện thoại</h2>
          <img src={QR} alt="download"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;