import React, { useState } from "react";
import Footer from "../../components/common/footer";
import Search from "../../components/search";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import Nightlife from "../../components/nightlife";

const HomePage = (props) => {
  const [activeTab, setActiveTab] = useState("Food");
  return (
    <div>
      <Header handleLogout={props.handleLogout} user={props.user} setActiveTab={setActiveTab}/>
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

    case "Home-Chefs":
      return <DiningOut />;

    case "My Orders":
      return <Nightlife />;
    
    case "Search":
      return <Search/>;
      
    default:
      return <Delivery />;
  }
};
export default HomePage;
