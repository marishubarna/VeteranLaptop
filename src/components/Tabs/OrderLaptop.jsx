import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { HowItGet } from "../Data/TabsDate"; // Corrected import path
import "../styles/StyleTab.css";

const OrderLaptop = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tabPanels = document.querySelectorAll(".tabPanelPadding");
    tabPanels.forEach((panel, index) => {
      if (index === activeIndex) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }, [activeIndex]);

  return (
    <Tabs
      value={activeIndex.toString()}
      className="TabDisplayOrderLaptop"
      orientation="vertical"
      onChange={(value) => setActiveIndex(parseInt(value))}
    >
      <TabsBody className="containerTextOrderLaptop">
        {HowItGet.map(
          (
            { title_of_the_tab_to_order_laptop, type_of_laptop, text_overview },
            index
          ) => (
            <TabPanel key={index} value={index.toString()}>
              <div className="TabContainer">
                <h1 className="HeaderOrderLaptop">
                  {title_of_the_tab_to_order_laptop}
                </h1>
                {type_of_laptop &&
                  type_of_laptop.map((laptop, laptopIdx) => (
                    <div key={laptopIdx} className="laptopItem">
                      {laptop.user_Icon && laptop.user_Icon[0] && (
                        <img
                          src={laptop.user_Icon[0].img}
                          alt={laptop.user_Icon[0].alt}
                          className="userIcon"
                        />
                      )}
                      <p className="paragrafTypeLaptop">{laptop.name}</p>
                    </div>
                  ))}
                {text_overview &&
                  text_overview.map((text, textIdx) => (
                    <p className="paragrafOverviewLaptop" key={textIdx}>
                      {text.text}
                    </p>
                  ))}
                <div className="SignUpDisplay">
                  {" "}
                  <button className="SignUp">Зареєструватися</button>
                </div>
              </div>
            </TabPanel>
          )
        )}
      </TabsBody>
      <TabsHeader className="containerTabsButton">
        {HowItGet.map(({ TabPanele_title, CountOfLaptops, images }, index) => (
          <Tab
            key={index}
            value={index.toString()}
            className="TabButtonContentCitys"
          >
            <div className="buttonTabCitys">
              {images &&
                images.map((image, idx) => (
                  <img key={idx} src={image.img} alt={image.alt} />
                ))}
              <div className="TextContainerHowGetIt">
                <h1 className="headerHowGetIt">{TabPanele_title}</h1>
                <p className="paragrafHowGetIt">{CountOfLaptops}</p>
              </div>
            </div>
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
};

export default OrderLaptop;
