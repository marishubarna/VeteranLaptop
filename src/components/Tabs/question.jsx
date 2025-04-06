import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Accordion } from "flowbite-react";
import "../styles/FAQ.css";
import { HowItWOrk, AccordionData } from "../Data/TabsDate";

const Question = () => {
  const [activeTab, setActiveTab] = useState("0");

  const getAccordionData = (index) => {
    switch (index) {
      case 0:
        return AccordionData.donors;
      case 1:
        return AccordionData.veterans;
      case 2:
        return AccordionData.volunteers;
      default:
        return [];
    }
  };

  return (
    <div className="displayCenterTabs">
      <Tabs
        value={activeTab}
        className="TabDisplay"
        orientation="vertical"
        onChange={(value) => setActiveTab(value)}
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
        <TabsBody className="containerTextFAQ">
          {HowItWOrk.map((_, index) => (
            <TabPanel key={index} value={index.toString()}>
              <div className="TabContainer">
                <h1 className="headerQuestion">
                  {`Часті питання для ${
                    index === 0
                      ? "донорів"
                      : index === 1
                      ? "ветеранів"
                      : "волонтерів"
                  }`}
                </h1>
                <div className="SeparationLine"></div>
                <Accordion className="AccordionContainerStyle">
                  {getAccordionData(index).map((item, i) => (
                    <Accordion.Panel
                      style={{ border: "none" }}
                      className="AccordionPanelStyle"
                      key={i}
                    >
                      <Accordion.Title
                        className="AccordionTitle"
                        style={{ textDecoration: "none" }}
                      >
                        {item.title}
                      </Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 AccordionParagraf text-black-500 dark:text-gray-400">
                          {item.content}
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  ))}
                </Accordion>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Question;
