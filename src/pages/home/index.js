import React, { useState } from "react";
import Footer from "../../components/common/footer";

import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import Nightlife from "../../components/nightlife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Food");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Food":
      return <Delivery />;

    case "Home-Cooks":
      return <DiningOut />;

    case "Log-in":
      return <Nightlife />;

    default:
      return <Delivery />;
  }
};
export default HomePage;
