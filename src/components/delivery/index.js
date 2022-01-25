import React from "react";
import { restaurants } from "../../data/restaurants";
import ExploreSection from "../common/exploreSection";
import "./delivery.css";
import DeliveryColletions from "./deliveryCollections";
import TopBrands from "./topBrands";

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <DeliveryColletions />
      <TopBrands />
      <ExploreSection
        restaurants={restaurantsList}
        collectionName="Top Dishes from our home cooks"
      />
    </div>
  );
};

export default Delivery;
