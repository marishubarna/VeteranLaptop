import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CookieConsent from "react-cookie-consent";
import "../styles/StyleCookie.css"; // Виправлений шлях до файлу стилів

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = Cookies.get("cookieConsent");
    if (!cookieAccepted) {
      setIsVisible(true);
      document.body.style.overflow = "hidden"; // Заблокувати прокручування
    }
    return () => {
      document.body.style.overflow = "auto"; // Відновити прокручування після видалення компонента
    };
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", true);
    document.body.style.overflow = "auto"; // Відновити прокручування після прийняття
    setIsVisible(false); // Приховати затемнення
  };

  const handleDecline = () => {
    Cookies.remove("cookieConsent");
    document.body.style.overflow = "auto"; // Відновити прокручування після відмови
    setIsVisible(false); // Приховати затемнення
  };

  return (
    <>
      {isVisible && <div className="overlay"></div>}
      {isVisible && (
        <CookieConsent
          cookieName="Cookie policy of Give Veteran Laptop "
          disableButtonStyles={true}
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 0px 15px 0px #00000040",

            className: "cookieContainer",
          }}
        >
          <div className="cookieContent">
            <div className="cookieTextContainer">
              <h1 className="HeaderCookie">Cookie policy</h1>
              <p className="paragrafCookie">
                We use cookies to provide social media features and to analyse
                our traffic. We also share information about your use of our
                site with our social media, advertising, and analytics partners
                who may combine it with other information that you’ve provided
                to them or that they’ve collected from your use of their
                services. By closing, you’re agreeing to use cookies in line
                with our Cookie policy. If you have any questions or need
                assistance, please don't hesitate to contact us. Stay connected
                with us for updates and stories about how your donation is
                making an impact!
              </p>
            </div>
            <div className="Container-Button">
              <button
                type="button"
                className="cookieButton"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button
                type="button"
                className="cookieButton"
                onClick={handleDecline}
              >
                Decline
              </button>
            </div>
          </div>
        </CookieConsent>
      )}
    </>
  );
};

export default Cookie;
