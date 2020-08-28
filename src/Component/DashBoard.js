import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

import "react-tabs/style/react-tabs.css";

export default () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [details,setDetails] = useState({})
  const handleChange = (i)=>{
      console.log('clickeddd')
      setCurrentTab(i)
  }
  const setDoc = (doc) => {
    setDetails(doc)
  }
  
  return (
    <Tabs selectedIndex={currentTab} onSelect={index => setCurrentTab(index)}>
      <TabList>
        <Tab>Step One</Tab>
        <Tab>Step Two</Tab>
        <Tab>Step Three</Tab>
      </TabList>

      <TabPanel>
        <StepOne handleChange={handleChange} setDoc={setDoc}/>
      </TabPanel>
      <TabPanel>
      <StepTwo handleChange={handleChange} setDoc={setDoc}/>
      </TabPanel>
      <TabPanel>
      <StepThree handleChange={handleChange} details={details}/>
      </TabPanel>
    </Tabs>
  );
};
