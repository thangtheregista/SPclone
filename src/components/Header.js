import React from "react";
import "./Header.css";

import {
  BsFacebook,
  BsInstagram,
  BsBell,
  BsQuestionCircle,
  BsGlobe,
  BsChevronCompactDown,
  BsSearch,
  BsCart2,
} from "react-icons/bs";
import logo from "../images/pngaaa.com-4486128.png";
import qr from "../images/d91264e165ed6facc6178994d5afae79.png";
import appstore from "../images/appstore.png";
import google from "../images/google.png";

import { Link } from "react-router-dom";

import { useEffect } from "react";
function Header({
  cart,
  fetchProducts,
  textbounce,
  fetchCart,
  isLogged,

  currUser,
  deleteCurrentUser,
}) {
  useEffect(() => {
    // fetchCart();
  }, []);
  return (
    <div className="header">
      <div className="header-container-wrapper">
        <div className="navbar-top-container">
          <ul className="navbar-top-left">
            <li className="nav-links">
              <a href="#">
                <p>
                  <Link to="/SPclone/users">Kênh Người Bán</Link>
                </p>
              </a>
            </li>
            <li className="nav-links">
              <a href="#">Trở thành Người bán Shoppee</a>
            </li>
            <li className="nav-links ">
              <a className="nav__download-nav" href="#">
                Tải ứng dụng
                <div className="download-container">
                  <img className="download-qr" src={qr} alt="Download QR" />
                  <div className="store-container">
                    <a href="#">
                      <img
                        className="download-app-store"
                        src={appstore}
                        alt="App Store"
                      />
                    </a>
                    <a href="#">
                      <img src={google} />
                    </a>
                  </div>
                </div>
              </a>
            </li>
            <li className="nav-links">
              <a href="#">
                Kết nối <BsFacebook /> <BsInstagram />
              </a>
            </li>
          </ul>
          <ul className="navbar-top-right">
            <li className="nav-links">
              <a className="nav__notify" href="#">
                <BsBell />
                Thông báo
                <div className="notify-container">
                  <div className="notify-log">Đăng nhập để xem thông báo</div>
                  <div className="notify-sub-links">
                    <div className="notify-button">
                      <a href="#">Đăng nhập</a>
                    </div>
                    <div className="notify-button">
                      <a href="#">Đăng ký</a>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="nav-links">
              <a href="#">
                <BsQuestionCircle />
                Hỗ trợ
              </a>
            </li>
            <li className="nav-links">
              <a className="nav__language" href="#">
                <BsGlobe />
                Tiếng Việt
                <BsChevronCompactDown />
                <div className="language-container">
                  <div className="language">Tiếng Việt</div>
                  <div className="language">Tiếng Anh</div>
                </div>
              </a>
            </li>
            {isLogged ? (
              <div>
                <li className="nav-links">
                  <a className="nav__language" href="#">
                    Hello {currUser.fname}
                    <BsChevronCompactDown />
                    <div className="language-container">
                      <div
                        className="language"
                        onClick={() => {
                          deleteCurrentUser();
                        }}
                      >
                        Đăng xuất
                      </div>
                    </div>
                  </a>
                </li>
              </div>
            ) : (
              <div className="log-container">
                <li className="nav-links">
                  <Link to="/SPclone/signup">
                    <a href="#">Đăng Ký</a>
                  </Link>
                </li>
                <li className="nav-links">
                  <Link to="/SPclone/signin">
                    <a href="#">Đăng Nhập</a>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-with-search-container-wrapper">
          <div className="navbar-with-search-container">
            <div className="logo-wrapper">
              <a className="logo" href="#">
                <Link to="/SPclone">
                  <img
                    src={logo}
                    onClick={() => {
                      fetchProducts();
                    }}
                  />
                </Link>
              </a>
            </div>
            <div className="search-bar-with-suggestions-links-container">
              <form className="form-search-container">
                <input
                  type="text"
                  className="form-search"
                  placeholder="P&G TUNG SIÊU VOUCHER 150K"
                  onChange={(e) => {
                    textbounce(e.target.value);
                  }}
                />
                <div className="search-results-container">
                  <div>P&G TUNG SIÊU VOUCHER 150K</div>
                </div>
                <button type="button" className="btn search-btn">
                  <BsSearch />
                </button>
              </form>
              <div className="suggestions-links-container-wrapper">
                <ul className="suggestions-links-container">
                  <li className="nav-links">
                    <a href="#">Váy</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">Dép</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">Dép Nữ</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">Áo Phông</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">Áo Croptop</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">Túi Xách Nữ</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">Túi Đeo Chéo</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">Áo Thun</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cart-wrapper">
              <a className="cart" href="#">
                <Link to="/SPclone/cart">
                  <BsCart2
                    onClick={() => {
                      fetchCart();
                    }}
                  />
                </Link>
                <div className="usermode navsearch__cart--label">
                  {cart && cart.total_items}
                </div>
                <div className="cart-container">Chưa có sản phẩm</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
