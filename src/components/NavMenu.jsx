import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import "../components/styles/StyleHeader.css";
import Logo from "../assets/logo-full.svg";

const navigation = [
  { name: "Про нас", href: "#how", current: true },
  { name: "Отримати", href: "#form", current: false },
  { name: "Подарувати", href: "#form", current: false },
  { name: "Часті питання", href: "#faq", current: false },
  { name: "Контакти", href: "#contact", current: false },
];

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navBarContainer">
      <div className="logoContainer">
        <img src={Logo} alt="Логотип" className="logo" />
      </div>
      <Disclosure as="nav" className="displayFlexBurgerMenu">
        {({ open }) => (
          <>
            <div className="nav-container">
              {/* Burger Menu Button */}
              <div className="burger-container">
                <button
                  className={isOpen ? "burger open" : "burger"}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="tt"></span>
                  <span className="mm"></span>
                  <span className="bb"></span>
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className={`nav-items ${isOpen ? "show" : ""}`}>
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="nav-link">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu panel */}
            <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
              <div className="menu-items">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="nav-link">
                    {item.name}
                  </a>
                ))}
                <button className="button-support">Для організацій</button>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <button className="button-support desktop-only">Для організацій</button>
    </div>
  );
}
