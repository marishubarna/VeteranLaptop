import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { HowItWOrk } from "../Data/TabsDate"; // Corrected import path
import "../styles/StyleTab.css";

const HowWork = () => {
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
    <div className="displayCenterTabs">
      <Tabs
        value={activeIndex.toString()}
        className="TabDisplay"
        orientation="vertical"
        onChange={(value) => setActiveIndex(parseInt(value))}
      >
        <TabsHeader className="containerTabsButton">
          {HowItWOrk.map(({ TabPanele_title }, index) => (
            <Tab
              key={index}
              value={index.toString()}
              className="TabButtonContentVolunters"
            >
              <div className="buttonTab">{TabPanele_title}</div>
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody className="containerText">
          {HowItWOrk.map(({ title_of_the_tab, text_of_the_tab }, index) => (
            <TabPanel key={index} value={index.toString()}>
              <div className="TabContainer">
                <h1 className="HeaderHowItWork">{title_of_the_tab}</h1>
                {text_of_the_tab.map((item, idx) => (
                  <p className="paragrafHowItWork" key={idx}>
                    {item.text}
                  </p>
                ))}
                <div className="SignUpDisplay">
                  {" "}
                  <button className="SignUp">Зареєструватися</button>
                </div>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default HowWork;
