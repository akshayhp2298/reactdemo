import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

import "react-tabs/style/react-tabs.css";

export default () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleChange = (i)=>{
      console.log('clickeddd')
      setCurrentTab(i)
  }
  return (
    <Tabs selectedIndex={currentTab} onSelect={index => setCurrentTab(index)}>
      <TabList>
        <Tab>Step One</Tab>
        <Tab>Step Two</Tab>
        <Tab>Step Three</Tab>
      </TabList>

      <TabPanel>
        <StepOne handleChange={handleChange} />
      </TabPanel>
      <TabPanel>
      <StepTwo handleChange={handleChange} />
      </TabPanel>
      <TabPanel>
      <StepThree handleChange={handleChange} />
      </TabPanel>
    </Tabs>
  );
};
