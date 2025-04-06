import React from "react";
import "../components/styles/StyleHeader.css";
import LaptopIllustration from "../assets/laptop.svg";

const HeroSection = () => {
  return (
    <section className="displayFlex bg-hero">
      <div className="container-heroSection">
        <div className="text-container">
          <h1 className="header-heroSection">
            Старий ноутбук ветерану <span className="dash">—</span> <br /> шанс
            на майбутнє!
          </h1>
          <p className="paragraf-heroSection">
            У вас є старий ноутбук? Подаруйте його ветерану, який прагне пройти
            ІТ-курси та здобути нові навички! <br /> Ми організовуємо волонтерів
            для передачі ноутбуків тим, хто їх потребує, по всій країні.
          </p>
        </div>
        <div className="button-container">
          <button
            className="button-heroSection"
            type="button"
            aria-label="Подарувати ноутбук"
          >
            Подарувати ноутбук
          </button>
          <button
            className="button-heroSection"
            type="button"
            aria-label="Отримати ноутбук"
          >
            Отримати ноутбук
          </button>
        </div>
      </div>
      <div className="images-container">
        <img
          src={LaptopIllustration}
          height={"408px"}
          width={"480px"}
          alt="Ілюстрація ноутбука"
        />
      </div>
    </section>
  );
};

export default HeroSection;
