import React from "react";
import "./tabOptions.css";

const tabs = [
  {
    id: 1,
    name: "Food",
    active_img: "food.png",
    backdrop: "#FCEEC0",
    inactive_img:"food.png",
  },
  {
    id: 2,
    name: "Home-Cooks",
    active_img:"home.png",
    backdrop: "#E5F3F3",
    inactive_img:"home.png",
  },
  {
    id: 3,
    name: "Log-in",
    active_img:"loginlogo.png",
    backdrop: "#EDf4FF",
    inactive_img:"loginlogo.png",
  },
];

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="options-wrapper max-width">
        {tabs.map((tab) => (
          <div
            className={`tab-item absolute-center cur-po ${
              activeTab === tab.name && "active-tab"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <div
              className="tab-image-container absolute-center"
              style={{
                backgroundColor: `${
                  activeTab === tab.name ? tab.backdrop : ""
                }`,
              }}
            >
              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                className="tab-image"
                alt={tab.name}
              />
            </div>
            <div className="tab-name">{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;
