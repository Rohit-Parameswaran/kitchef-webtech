import React from "react";
import { dining } from "../../data/dining";
import Collection from "../common/collection";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import "./diningOut.css";

const diningList = dining;

const DiningOut = () => {
  return (
    <div>
      <ExploreSection
        restaurants={diningList}
        collectionName="Our home-chefs"
      />
    </div>
  );
};

export default DiningOut;
