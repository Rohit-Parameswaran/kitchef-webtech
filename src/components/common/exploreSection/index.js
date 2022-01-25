import React, { useState } from "react";
import ExploreCard from "./exploreCard";
import "./exploreSection.css";

const ExploreSection = ({ restaurants, collectionName, setWasOrderCancelled }) => {
  const showVal = collectionName.includes("Top Dishes") || collectionName.includes("Search Results") ? 1 : collectionName.includes("My Orders") ? 3 : 2;
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {restaurants.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} i={i} showVal={showVal} setWasOrderCancelled={setWasOrderCancelled} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
