import React, { useState } from "react";

// Tab component
const Tab = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin: "0 5px",
        border: "none",
        backgroundColor: active ? "#007bff" : "#f1f1f1",
        color: active ? "#fff" : "#000",
        cursor: "pointer",
        borderRadius: "5px",
        fontWeight: active ? "bold" : "normal",
        boxShadow: active ? "0px 4px 6px rgba(0, 0, 0, 0.2)" : "none",
      }}
    >
      {label}
    </button>
  );
};

// Tabs component
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Tab Buttons */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
