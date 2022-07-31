import React from "react";
import "./Banner.css";
import { BsFillLightningFill } from "react-icons/bs";

function Banner() {
  return (
    <div className="banner-container-wrapper">
      <div className="banner-container">
        <a href="#" className="sales-links">
          <div className="icon-wrapper">
            <div className="icon">
              <BsFillLightningFill />
            </div>
          </div>
          Khung Giờ Săn Sale
        </a>
        <a href="#" className="sales-links">
          <div className="icon-wrapper">
            <div className="icon">
              <BsFillLightningFill />
            </div>
          </div>
          Gì Cũng Rẻ - Mua Là Freeship
        </a>
        <a href="#" className="sales-links">
          <div className="icon-wrapper">
            <div className="icon">
              <BsFillLightningFill />
            </div>
          </div>
          Miễn Phí Vận Chuyển{" "}
        </a>
        <a href="#" className="sales-links">
          <div className="icon-wrapper">
            <div className="icon">
              <BsFillLightningFill />
            </div>
          </div>
          Hoàn Xu 6% - Lên Đến 200K
        </a>
        <a href="#" className="sales-links">
          <div className="icon-wrapper">
            <div className="icon">
              <BsFillLightningFill />
            </div>
          </div>
          Hàng Hiệu Giá Tốt
        </a>
        <a href="#" className="sales-links">
          <div className="icon-wrapper">
            <div className="icon">
              <BsFillLightningFill />
            </div>
          </div>
          Hàng Quốc Tế{" "}
        </a>
        <a href="#" className="sales-links">
          <div className="icon-wrapper">
            <div className="icon">
              <BsFillLightningFill />
            </div>
          </div>
          Nạp Thẻ, Hóa Đơn & Phim{" "}
        </a>
        <a href="#" className="sales-links">
          <div className="icon-wrapper">
            <div className="icon">
              <BsFillLightningFill />
            </div>
          </div>
          Deal Sốc Từ 1K{" "}
        </a>
      </div>
    </div>
  );
}

export default Banner;
