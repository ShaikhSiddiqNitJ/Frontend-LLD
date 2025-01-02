import React from "react";
import Tabs from "./Tabs";

const App = () => {
  const tabData = [
    {
      label: "Home",
      content: <p>Welcome to the Home tab!</p>,
    },
    {
      label: "Profile",
      content: <p>This is the Profile tab. Customize your info here!</p>,
    },
    {
      label: "Settings",
      content: <p>Adjust your preferences in the Settings tab.</p>,
    },
  ];

  return (
    <div>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;
