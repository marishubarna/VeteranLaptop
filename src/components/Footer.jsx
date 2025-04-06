import React from "react";
import Logo from "../assets/Group 1.svg";

import "../components/styles/Footer.css";
const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="Column1Display">
        <div className="Logo">
          <div className="LogoImages">
            <img src={Logo} height={"32px"} alt="" />
          </div>
          <div className="textContainerLogo">
            <p className="ParagrafTextLogo">
              +380503240484 <br /> admin@it-sprout.org
            </p>
          </div>
        </div>
        <div className="socialNetwork">
          <div className="icons">
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </button>
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 50 50"
              >
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="Column2Display">
        <div className="copyright">
          © 2022-2024 - CF IT-SPROUT. Всi права захищено.
        </div>
        <div className="policy">
          <h1 className="PolicyCookie">Полiтика Cookie</h1>
          <h1 className="PrivacyPolicy">Полiтика Конфiденцiйностi</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
