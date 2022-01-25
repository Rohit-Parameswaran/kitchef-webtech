import React, { useState, useEffect } from "react";
import ExploreSection from "../common/exploreSection";
import "./nightlife.css";
import fire from "../../fire.js";
import { restaurants } from "../../data/restaurants"

const Nightlife = () => {
  
  const [wasOrderCancelled, setWasOrderCancelled] = useState(false);

  const db = fire.database();
  const userName = localStorage.getItem('Current User').split(/@|\./).join("");
  const orderlist = db.ref(userName + "/userOrders");
  const userOrders = [];
  orderlist.on('value', (snapshot) => {
    const ord = snapshot.val();
    const pair = [];

    for (let id in ord) {
      console.log(id);
      restaurants.map((res) => {
        if (res?.info?.resId === parseInt(id, 10)) {
          userOrders.push(res);
          console.log(res?.info?.resId, id);
        }
      })
    }
  });

  return (
    <div>
      <ExploreSection
        restaurants={userOrders}
        collectionName="My Orders"
        setWasOrderCancelled={setWasOrderCancelled}
      />
    </div>
  )
};


export default Nightlife;
