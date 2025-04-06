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

const HowGet = () => {
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
          {HowItGet.map(
            ({ TabPanele_title, CountOfVolunteers, images }, index) => (
              <Tab
                key={index}
                value={index.toString()}
                className="TabButtonContentCitys"
              >
                <div className="buttonTabCitys">
                  {images &&
                    images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image.img}
                        alt={image.alt || "Image"}
                      />
                    ))}
                  <div className="TextContainerHowGetIt">
                    <h1 className="headerHowGetIt">{TabPanele_title}</h1>
                    <p className="paragrafHowGetIt">{CountOfVolunteers}</p>
                  </div>
                </div>
              </Tab>
            )
          )}
        </TabsHeader>
        <TabsBody className="containerText ">
          {HowItGet.map(
            (
              {
                title_of_the_tab,
                text_of_the_tab,
                type_of_laptop,
                text_overview,
              },
              index
            ) => (
              <TabPanel key={index} value={index.toString()}>
                <div className="TabContainer">
                  <h1 className="HeaderHowItWork">{title_of_the_tab}</h1>
                  {text_of_the_tab &&
                    text_of_the_tab.map((item, idx) => (
                      <div key={idx} className="containerTextAndImagesDisplay">
                        <div className="paragrafHowItWork">
                          <p className="juiceCenterParagraf">
                            {item.user_Icon && (
                              <img
                                src={item.user_Icon}
                                alt="User Icon"
                                className="userIcon"
                              />
                            )}
                            {item.text}
                          </p>
                        </div>
                      </div>
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
      </Tabs>
    </div>
  );
};

export default HowGet;
