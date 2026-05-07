import React, { Component, useState } from "react";
import Settings from "./Settings";
import Profile from "./Profile";
import Interest from "./Interest";
import "./style.css";

function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  //storing the reference of componenet not rendering it now
  const tabs = [
    { name: "Profile", component: Profile },
    { name: "Interests", component: Interest },
    { name: "Settings", component: Settings },
  ];
  const ActiveTabcomponent = tabs[activeTab].component;
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, i) => (
          <div key={i} className="heading" onClick={() => setActiveTab(i)}>
            {t.name}
          </div>
        ))}
      </div>
      <div>
        <ActiveTabcomponent />
      </div>
    </div>
  );
}

export default TabForm;
